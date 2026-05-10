import { VersionGraph } from '@start9labs/start-sdk'
import { v_1_4_0_2 } from './v1.4.0.2'
import { v_1_5_0_0 } from './v1.5.0.0'

export const versionGraph = VersionGraph.of({
  current: v_1_5_0_0,
  other: [v_1_4_0_2],
})
