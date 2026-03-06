export const DEFAULT_LANG = 'en_US'

const dict = {
  // interfaces.ts
  'Web UI': 1,
  'The web interface of Canary': 2,

  // main.ts
  'The server is ready': 10,
  'The server is not ready': 11,
  'Web interface': 12,
  'The web interface is ready': 13,
  'The web interface is not ready': 14,

  // actions/selectElectrum.ts
  'Electrum Server': 20,
  Fulcrum: 21,
  Electrs: 22,
  'Select Electrum Server': 23,
  'Select which Electrum server to use for address lookups': 24,

  // dependencies.ts
  'Canary requires an Electrum server to look up addresses': 30,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
