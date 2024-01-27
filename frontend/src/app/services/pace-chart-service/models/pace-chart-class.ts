import {
  PaceChartObject,
  PaceChartObjects,
} from 'src/app/types/pace-chart-types'
import { available10kPacesInData } from '../data'

export class PaceChart {
  chart: PaceChartObject

  constructor(chart: PaceChartObject) {
    this.chart = chart
  }

  static fromGiven10kPace(
    chartsData: PaceChartObjects,
    _10kPace: available10kPacesInData,
  ) {
    const chartData = chartsData[_10kPace]
    return new PaceChart(chartData)
  }
}
