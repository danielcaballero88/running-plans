import { available10kPacesInData } from 'src/app/services/pace-chart-service/data'

export enum Distance {
  mile = 'mile',
  _5k = '5k',
  _10k = '10k',
  _21k = 'half_marathon',
  _42k = 'marathon',
  tempo = 'tempo',
  recovery = 'recovery',
}

export type distanceString = `${Distance}`

export type PaceChartObjectEntry = { total?: string; pace: string }

export type PaceChartObject = { [key in distanceString]: PaceChartObjectEntry }

export type PaceChartObjects = {
  [key in available10kPacesInData]: PaceChartObject
}

export type PaceChartIndexObject = { [key: string]: string }

export type PaceChartIndexObjects = {
  [key in distanceString]: PaceChartIndexObject
}
