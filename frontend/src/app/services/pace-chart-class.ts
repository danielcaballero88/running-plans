import {
  ChartObject,
  ChartsData,
  available10kPacesInData,
} from 'src/app/services/pace-chart-types'

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
