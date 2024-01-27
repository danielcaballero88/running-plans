import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AppStateService } from 'src/app/services/app-state-service/app-state-service.service'
import { PaceChartObject } from 'src/app/types/pace-chart-types'

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
        distance: item[0],
        total: item[1].total,
        pace: item[1].pace,
      }
    })

    console.log('dataSource', this.dataSource)
  }
}
