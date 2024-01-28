import {
  PaceChartIndexObjects,
  PaceChartObjects,
} from '../../../types/pace-chart-types'
import { data, indexes } from './paceChartData'

export function getPaceChartData() {
  return data as PaceChartObjects
}

export function getPaceChartIndexes() {
  return indexes as PaceChartIndexObjects
}
