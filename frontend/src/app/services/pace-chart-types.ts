import { data } from './paceChartData'

export enum Distance {
  mile = 'mile',
  _5k = '5k',
  _10k = '10k',
  _21k = 'half_marathon',
  _42k = 'marathon',
  tempo = 'tempo',
}

export type distanceString = `${Distance}`

export type ChartObjectEntry = { total?: string; pace: string }

export type ChartObject = { [key in distanceString]: ChartObjectEntry }

export type IndexObject = { [key: string]: string }

export type IndexesData = { [key in distanceString]: IndexObject }

export type available10kPacesInData = keyof typeof data

export type ChartsData = {
  [key in available10kPacesInData]: ChartObject
}
