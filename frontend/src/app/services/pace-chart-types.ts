import { Pace } from 'src/app/services/pace-class'
import { data } from 'src/app/services/paceChartData'

export enum Distance {
  mile = 'mile',
  _5k = '5k',
  _10k = '10k',
  _21k = 'half_marathon',
  _42k = 'marathon',
  tempo = 'tempo',
}

export type distanceString = `${Distance}`

export type ChartObjectEntry = { total?: Pace; pace: Pace }

export type ChartObject = {
  [key in distanceString]: ChartObjectEntry
}

export type available10kPacesInData = keyof typeof data

export type ChartData = {
  [key in available10kPacesInData]: ChartObject
}
