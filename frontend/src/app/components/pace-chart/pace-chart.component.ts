import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { TimeSpan } from 'src/app/models/timeSpan'
import { AppStateService } from 'src/app/services/app-state-service/app-state-service.service'
import {
  Distance,
  DistanceString,
  PaceChartObject,
} from 'src/app/types/pace-chart-types'

export interface RowObject {
  distance: string
  total?: string
  pace: string
}

@Component({
  selector: 'app-pace-chart',
  templateUrl: './pace-chart.component.html',
  styleUrls: ['./pace-chart.component.scss'],
})
export class PaceChartComponent implements OnInit {
  paceChartObj?: PaceChartObject
  dataSource?: RowObject[]

  constructor(
    private appState: AppStateService,
    private router: Router,
  ) {}

  ngOnInit() {
    const paceChartObj = this.appState.getChartPace()

    if (paceChartObj == undefined) {
      this.appState.removeState()
      this.router.navigate(['/get-started'])
      return
    }

    this.paceChartObj = paceChartObj

    this.dataSource = Object.entries(paceChartObj).map((item) => {
      return {
        distance: this.parseDistance(item[0] as DistanceString),
        total: item[1].total
          ? TimeSpan.fromString(item[1].total).toString()
          : item[1].total,
        pace: TimeSpan.fromString(item[1].pace).toString(),
      }
    })

    console.log('dataSource', this.dataSource)
  }

  private parseDistance(distance: DistanceString): string {
    const distanceToStr: { [key in Distance]: string } = {
      mile: 'Mile',
      '5k': '5K',
      '10k': '10K',
      tempo: 'Tempo',
      half_marathon: 'Half Marathon',
      marathon: 'Marathon',
      recovery: 'Recovery',
    }
    const result = distanceToStr[distance] ?? `${distance}`
    return result
  }
}
