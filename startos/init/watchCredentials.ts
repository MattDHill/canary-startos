import { utils } from '@start9labs/start-sdk'
import { setAdminPassword } from '../actions/setAdminPassword'
import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

export const watchCredentials = sdk.setupOnInit(async (effects) => {
  const store = await storeJson.read().const(effects)

  // Internal session secret — backfill whenever it's missing (fresh install,
  // upgrade from a version that had no login, a manual store edit, …).
  if (!store?.jwtSecret) {
    await storeJson.merge(effects, {
      jwtSecret: utils.getDefaultString({ charset: 'a-z,A-Z,0-9', len: 64 }),
    })
  }

  // Admin password — prompt the user to set it if it isn't set yet.
  if (!store?.adminPassword) {
    await sdk.action.createOwnTask(effects, setAdminPassword, 'critical', {
      reason: i18n('Set the admin password before signing in to Canary'),
    })
  }
})
