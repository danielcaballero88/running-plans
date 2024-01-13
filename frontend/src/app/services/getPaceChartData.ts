import { ChartsData, IndexesData } from './pace-chart-types'
import { data, indexes } from './paceChartData'

export function getPaceChartData() {
  return data as ChartsData
}

export function getPaceChartIndexes() {
  return indexes as IndexesData
}