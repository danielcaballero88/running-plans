import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import {
  ChartObject,
  Distance,
  IndexesData,
} from 'src/app/types/pace-chart-types'
import { available10kPacesInData } from './data'
import {
  getPaceChartData as _getPaceChartData,
  getPaceChartIndexes as _getPaceChartIndexes,
} from './data/getPaceChartData'
import { Index } from './models/index-class'
import { PaceChart } from './models/pace-chart-class'
import { Pace } from './models/pace-class'
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
