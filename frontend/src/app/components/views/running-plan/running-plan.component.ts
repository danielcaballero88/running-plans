import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UserInputObject } from 'src/app/components/views/get-started/types'
import { RunningPlan } from 'src/app/components/views/running-plan/plans'
import { AppStateService } from 'src/app/services/app-state-service/app-state-service.service'
import { Distance, PaceChartObject } from 'src/app/types/pace-chart-types'

@Component({
  selector: 'app-running-plan',
  templateUrl: './running-plan.component.html',
  styleUrls: ['./running-plan.component.scss'],
})
export class RunningPlanComponent implements OnInit {
  userInput!: UserInputObject
  paceChartObj?: PaceChartObject
  runningPlan?: RunningPlan

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
    this.runningPlan = new RunningPlan(userInput.planningFor, this.paceChartObj)

    console.log('this.runningPlan', this.runningPlan)
  }

  getDistance(): string {
    return this.parseDistance(this.userInput.planningFor)
  }

  private parseDistance(distance: Distance): string {
    const distanceToStr: { [key: string]: string } = {
      [Distance._5k]: '5K',
      [Distance._10k]: '10K',
      [Distance._21k]: 'Half Marathon',
      [Distance._42k]: 'Marathon',
    }
    const result = distanceToStr[distance] ?? `${distance}`
    return result
  }
}
