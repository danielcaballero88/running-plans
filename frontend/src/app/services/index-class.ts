import { Distance } from './pace-chart-types'
import { indexes } from './paceChartData'

export class Index {
  distance: Distance
  index: { [key: string]: string }

  constructor(distance: Distance) {
    this.distance = distance
    this.index = this.getIndex()
  }

  getIndex() {
    return indexes[this.distance]
  }

  getFittingPace(pace: string): { givenPace: string; _10kPace: string } {
    // Filter to get only greater paces (slower)
    const filteredPaces = Object.entries(this.index).filter(([key, val]) => {
      return pace <= key
    })
    if (filteredPaces.length === 0) {
      throw new Error(`No suitable pace found for ${pace}`)
    }
    return {
      givenPace: filteredPaces[0][0],
      _10kPace: filteredPaces[0][1],
    }
  }

  getFitting10kPace(pace: string): string {
    return this.getFittingPace(pace)._10kPace
  }
}
