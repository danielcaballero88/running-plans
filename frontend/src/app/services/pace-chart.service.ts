import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Index } from 'src/app/services/index-class'
import { PaceChart } from 'src/app/services/pace-chart-class'
import {
  ChartObject,
  Distance,
  IndexesData,
  available10kPacesInData,
} from 'src/app/services/pace-chart-types'
import { Pace } from 'src/app/services/pace-class'
import {
  getPaceChartData as _getPaceChartData,
  getPaceChartIndexes as _getPaceChartIndexes,
} from './getPaceChartData'
// import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class PaceChartService {
  // constructor(http: HttpClient) {}

  getPaceChartData(): Observable<ChartObject> {
    console.log('PaceChartService.getPaceChartData')
    const paceChartData = _getPaceChartData()
    console.log('paceChartData: ', paceChartData)
    return of<ChartObject>(paceChartData as unknown as ChartObject)
  }

  getPaceChartIndexes(): Observable<IndexesData> {
    console.log('PaceChartService.getPaceChartIndexes')
    const paceChartIndexes = _getPaceChartIndexes()
    console.log('paceChartIndexes', paceChartIndexes)
    return of<IndexesData>(paceChartIndexes as IndexesData)
  }

  getPaceChartForInput(
    distance: Distance,
    hours: number,
    minutes: number
  ): PaceChart {
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
    const paceChart = PaceChart.fromGiven10kPace(
      _getPaceChartData(),
      _10kPace as available10kPacesInData
    )

    return paceChart
  }
}
