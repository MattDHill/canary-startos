import { storeJson } from './fileModels/store.json'
import { sdk } from './sdk'

type Effects = Parameters<Parameters<typeof sdk.setupMain>[0]>[0]['effects']

type NtfyProvisioning = {
  publishUrl: string
  token: string
  topic: string
}

type ActionResultMember = {
  name: string
  type: 'single' | 'group'
  value?: string | ActionResultMember[]
}

function findResultValue(
  members: ActionResultMember[],
  name: keyof NtfyProvisioning,
): string | null {
  for (const member of members) {
    if (member.type === 'single' && member.name === name) {
      return typeof member.value === 'string' ? member.value : null
    }
    if (member.type === 'group' && Array.isArray(member.value)) {
      const nestedValue = findResultValue(member.value, name)
      if (nestedValue) {
        return nestedValue
      }
    }
  }

  return null
}

function parseProvisioningResult(result: unknown): NtfyProvisioning | null {
  if (
    !result ||
    typeof result !== 'object' ||
    !('result' in result) ||
    !result.result ||
    typeof result.result !== 'object' ||
    !('value' in result.result) ||
    !Array.isArray(result.result.value)
  ) {
    return null
  }

  const members = result.result.value as ActionResultMember[]
  const publishUrl = findResultValue(members, 'publishUrl')
  const token = findResultValue(members, 'token')
  const topic = findResultValue(members, 'topic')

  if (!publishUrl || !token || !topic) {
    return null
  }

  return { publishUrl, token, topic }
}

async function provisionNtfy(effects: Effects): Promise<NtfyProvisioning | null> {
  const result = await effects.action
    .run({
      packageId: 'ntfy',
      actionId: 'provision-publisher',
      input: {
        packageId: 'canary',
        topic: 'canary',
      },
    })
    .catch(() => null)

  return parseProvisioningResult(result)
}

export async function getLocalNtfyEnv(
  effects: Effects,
  storedNtfy: NtfyProvisioning | undefined,
): Promise<Record<string, string>> {
  const ntfy = storedNtfy ?? (await provisionNtfy(effects))
  if (!ntfy) {
    return {}
  }

  if (!storedNtfy) {
    await storeJson.merge(effects, { ntfy })
  }

  return {
    CANARY_NTFY_SERVER_URL: ntfy.publishUrl,
    CANARY_NTFY_TOKEN: ntfy.token,
    CANARY_NTFY_TOPIC: ntfy.topic,
  }
}
