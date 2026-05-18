import { VersionGraph } from '@start9labs/start-sdk'
import { v_1_4_0_2 } from './v1.4.0.2'
import { v_1_5_0_2 } from './v1.5.0.2'
import { v_1_5_0_3 } from './v1.5.0.3'

export const versionGraph = VersionGraph.of({
  current: v_1_5_0_3,
  other: [v_1_5_0_2, v_1_4_0_2],
})
