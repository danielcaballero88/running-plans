import { Injectable } from '@angular/core'
import { distances } from 'src/app/services/pace-chart-constants'
import { Distance } from 'src/app/services/pace-chart-types'
import { Pace } from 'src/app/services/pace-class'
import { data, indexes } from './paceChartData'
// import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class PaceChartService {
  // constructor(http: HttpClient) {}

  getPaceChartData() {
    console.log('PaceChartService.getPaceChartData')
    console.log(data)
    console.log(indexes)
  }

  private timeToPace(distance: Distance, hours: number, minutes: number) {
    // Calculate pace
    const secondsTotal = (hours * 60 * 60 + minutes * 60) / distances[distance]
    const h = Math.floor(secondsTotal / 3600)
    const minutesRemainder = secondsTotal % 3600
    const s = Math.floor(minutesRemainder / 60)
    const m = minutesRemainder % 60

    return new Pace(h, m, s)
  }

  getPaceChartForInput(distance: Distance, hours: number, minutes: number) {
    console.log('Getting pace chart for input: ', {
      distance,
      hours,
      minutes,
    })
    const pace = this.timeToPace(distance, hours, minutes)
    console.log('Pace: ', pace, pace.toString())
    const index = indexes[distance]
    console.log(index)
  }
}
