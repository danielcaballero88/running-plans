import { Distance } from 'src/app/types/pace-chart-types'
import { getPaceChartIndexes } from '../data'

export class Index {
  distance: Distance
  index: { [key: string]: string }

  constructor(distance: Distance) {
    console.log('Index.constructor', 'distance: ', distance)
    this.distance = distance
    this.index = this.getIndex()
    console.log('this.index: ', this.index)
  }

  getIndex() {
    return getPaceChartIndexes()[this.distance]
  }

  getFittingPace(pace: string): { givenPace: string; _10kPace: string } {
    // Filter to get only greater paces (slower)
    console.log('getFittingPace', 'pace: ', pace)
    const filteredPaces = Object.entries(this.index).filter(([key]) => {
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
    console.log('getFitting10kPace', 'pace: ', pace)
    return this.getFittingPace(pace)._10kPace
  }
}
