import { ChartObject, available10kPacesInData } from 'src/app/services/pace-chart-types'
import { Pace } from 'src/app/services/pace-class'
import { data } from 'src/app/services/paceChartData'

export class PaceChart {
  chart: ChartObject

  constructor(chart: ChartObject) {
    this.chart = chart
  }

  static fromGiven10kPace(_10kPace: available10kPacesInData) {
    console.log('_10kPace', _10kPace)
    const chartData = data[_10kPace]
    console.log('chartData', chartData)
    const parsedChartData = Object.entries(chartData).reduce(
      (acc: {[key: string]: any}, [distance, entry], idx) => {
        console.log(acc, [distance, entry], idx)
        acc[distance] = 1
        return acc
      },
      {}
    )
    // return new PaceChart(chartData as ChartObject)
  }
}
