type NtfyProvisioning = {
  publishUrl: string
  token: string
  topic: string
}

export function getLocalNtfyEnv(
  storedNtfy: NtfyProvisioning | undefined,
): Record<string, string> {
  const ntfy = storedNtfy
  if (!ntfy) {
    return {}
  }

  return {
    CANARY_NTFY_SERVER_URL: ntfy.publishUrl,
    CANARY_NTFY_TOKEN: ntfy.token,
    CANARY_NTFY_TOPIC: ntfy.topic,
  }
}
