import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import {
  getPaceChartData as _getPaceChartData,
  getPaceChartIndexes as _getPaceChartIndexes,
} from './getPaceChartData'
import { Index } from './index-class'
import { PaceChart } from './pace-chart-class'
import {
  ChartObject,
  Distance,
  IndexesData,
  available10kPacesInData,
} from './pace-chart-types'
import { Pace } from './pace-class'
// import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class PaceChartService {
  // constructor(http: HttpClient) {}

  getPaceChartData(): Observable<ChartObject> {
    const paceChartData = _getPaceChartData()
    return of<ChartObject>(paceChartData as unknown as ChartObject)
  }

  getPaceChartIndexes(): Observable<IndexesData> {
    const paceChartIndexes = _getPaceChartIndexes()
    return of<IndexesData>(paceChartIndexes as IndexesData)
  }

  getPaceChartForInput(
    distance: Distance,
    hours: number,
    minutes: number
  ): PaceChart {
    const pace = Pace.fromDistanceAndTime(distance, hours, minutes)
    const index = new Index(distance)
    const _10kPace = index.getFitting10kPace(pace.toString())
    const paceChart = PaceChart.fromGiven10kPace(
      _getPaceChartData(),
      _10kPace as available10kPacesInData
    )

    return paceChart
  }
}
