import { Distance } from 'src/app/types/pace-chart-types'

export interface UserInputObject {
  distance: Distance
  hours: number
  minutes: number
  planningFor: Distance
}
