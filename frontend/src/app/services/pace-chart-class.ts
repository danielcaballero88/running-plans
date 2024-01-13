import { Distance } from 'src/app/services/pace-chart-types'
import { Pace } from 'src/app/services/pace-class'

export class PaceChart {
  chart: Map<Distance, Pace>

  constructor(chart: Map<Distance, Pace>) {
    this.chart = chart
  }

  static fromGivenPace() {
    // to do...
  }
}
