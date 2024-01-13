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
    console.log('_10kPace', _10kPace)
    const chartData = chartsData[_10kPace]
    console.log('chartData', chartData)
    return new PaceChart(chartData)
  }
}
