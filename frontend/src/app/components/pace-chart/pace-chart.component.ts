import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AppStateService } from 'src/app/services/app-state-service/app-state-service.service'
import { PaceChartObject } from 'src/app/types/pace-chart-types'

@Component({
  selector: 'app-pace-chart',
  templateUrl: './pace-chart.component.html',
  styleUrls: ['./pace-chart.component.scss'],
})
export class PaceChartComponent implements OnInit {
  paceChartObj?: PaceChartObject

  constructor(
    private appState: AppStateService,
    private router: Router,
  ) {}

  ngOnInit() {
    const paceChart = this.appState.getChartPace()
    if (paceChart) {
      this.paceChartObj = paceChart
    } else {
      this.appState.removeState()
      this.router.navigate(['/get-started'])
    }
  }
}
