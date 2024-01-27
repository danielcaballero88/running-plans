import { UserInputObject } from 'src/app/components/get-started/types'
import { PaceChartObject } from 'src/app/types/pace-chart-types'

export interface StateObject {
  userInput?: UserInputObject
  paceChart?: PaceChartObject
}

export type stateKey = keyof StateObject
