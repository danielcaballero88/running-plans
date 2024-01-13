import { Injectable } from '@angular/core'
import { Index } from 'src/app/services/index-class'
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

  getPaceChartForInput(distance: Distance, hours: number, minutes: number) {
    console.log('Getting pace chart for input: ', {
      distance,
      hours,
      minutes,
    })
    const pace = Pace.fromDistanceAndTime(distance, hours, minutes)
    console.log('Pace: ', pace, pace.toString())
    const index = new Index(distance)
    console.log('index: ', index.index)
    const _10kPace = index.getFitting10kPace(pace.toString())
    console.log('Equivalent 10k pace: ', _10kPace)
  }
}
