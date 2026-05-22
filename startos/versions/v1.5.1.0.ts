import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_5_1_0 = VersionInfo.of({
  version: '1.5.1:0',
  releaseNotes: {
    en_US: `This release focuses on authentication fixes, UI enhancements, and performance improvements.
Key features and improvements:
  - Fixed self-hosted sign-in and sign-out functionality
  - Fixed auth token recovery and session validation
  - Added transaction explorer selection feature
  - Added dark mode support
  - Improved wallet transaction performance
  - Improved sync progress indicators
  - Improved mobile layouts and accessibility
  - Fixed transaction list layout issues
  - Fixed translated API error messages
  - Fixed recurring donation configuration
Full release notes can be found at https://github.com/schjonhaug/canary/releases`,
  },
  migrations: {},
})
