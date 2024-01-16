import {
  ChartPaceIndexObjects,
  ChartPaceObjects,
} from '../../../types/pace-chart-types'
import { data, indexes } from './paceChartData'

export function getPaceChartData() {
  return data as ChartPaceObjects
}

export function getPaceChartIndexes() {
  return indexes as ChartPaceIndexObjects
}
