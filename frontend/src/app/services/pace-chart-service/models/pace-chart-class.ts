import {
  ChartPaceObject,
  ChartPaceObjects,
} from 'src/app/types/pace-chart-types'
import { available10kPacesInData } from '../data'

export class PaceChart {
  chart: ChartPaceObject

  constructor(chart: ChartPaceObject) {
    this.chart = chart
  }

  static fromGiven10kPace(
    chartsData: ChartPaceObjects,
    _10kPace: available10kPacesInData
  ) {
    const chartData = chartsData[_10kPace]
    return new PaceChart(chartData)
  }
}
