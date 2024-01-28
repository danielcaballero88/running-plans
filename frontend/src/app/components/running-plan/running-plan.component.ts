import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UserInputObject } from 'src/app/components/get-started/types'
import { Plan5K } from 'src/app/components/running-plan/plans/5k'
import { AppStateService } from 'src/app/services/app-state-service/app-state-service.service'
import { PaceChartObject } from 'src/app/types/pace-chart-types'

@Component({
  selector: 'app-running-plan',
  templateUrl: './running-plan.component.html',
  styleUrls: ['./running-plan.component.scss'],
})
export class RunningPlanComponent implements OnInit {
  userInput?: UserInputObject
  paceChartObj?: PaceChartObject
  runningPlan?: Plan5K

  constructor(
    private appState: AppStateService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    console.log('RunningPlanComponent.ngOnInit')

    const userInput = this.appState.getUserInput()
    if (userInput == undefined) {
      this.appState.removeState()
      this.router.navigate(['/get-started'])
      return
    }
    this.userInput = userInput

    const paceChartObj = this.appState.getChartPace()
    if (paceChartObj == undefined) {
      this.appState.removeState()
      this.router.navigate(['/get-started'])
      return
    }
    this.paceChartObj = paceChartObj

    // For now I only have the 5k plan
    this.runningPlan = new Plan5K(this.paceChartObj)

    console.log('this.runningPlan', this.runningPlan)
  }
}
