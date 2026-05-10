import { ensureCredentials } from '../credentials'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

export const showLoginCredentials = sdk.Action.withoutInput(
  'show-login-credentials',

  async ({ effects }) => ({
    name: i18n('Show Login Credentials'),
    description: i18n('Reveal the Canary admin username and password'),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  async ({ effects }) => {
    const credentials = await ensureCredentials(effects)

    return {
      version: '1',
      title: i18n('Canary Login Credentials'),
      message: i18n('Use these credentials to sign in to Canary.'),
      result: {
        type: 'group',
        value: [
          {
            name: i18n('Username'),
            description: null,
            type: 'single',
            value: 'admin@local',
            copyable: true,
            qr: false,
            masked: false,
          },
          {
            name: i18n('Password'),
            description: null,
            type: 'single',
            value: credentials.adminPassword,
            copyable: true,
            qr: false,
            masked: true,
          },
        ],
      },
    }
  },
)
