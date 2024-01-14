import { ChartObject, ChartsData } from 'src/app/types/pace-chart-types'
import { available10kPacesInData } from '../data'

export class PaceChart {
  chart: ChartObject

  constructor(chart: ChartObject) {
    this.chart = chart
  }

  static fromGiven10kPace(
    chartsData: ChartsData,
    _10kPace: available10kPacesInData
  ) {
    const chartData = chartsData[_10kPace]
    return new PaceChart(chartData)
  }
}
