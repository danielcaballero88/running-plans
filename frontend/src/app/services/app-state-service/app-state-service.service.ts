import { Injectable } from '@angular/core'
import { UserInputObject } from 'src/app/components/get-started/types'
import { StateObject, stateKey } from 'src/app/services/app-state-service/types'
import { ChartPaceObject } from 'src/app/types/pace-chart-types'

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  private state: StateObject = {}

  constructor() {
    console.log('AppStateService.constructor')
    this.state = this.getState()
    console.log('AppStateService', 'userInput', this.state.userInput)
    console.log('AppStateService', 'paceChart', this.state.paceChart)
  }

  private getState(): StateObject {
    console.log('AppStateService', 'getState')
    const _state = localStorage.getItem('app-state')
    const state = _state ? JSON.parse(_state) : {}
    return state
  }

  private setState() {
    console.log('AppStateService', 'setState')
    localStorage.setItem('app-state', JSON.stringify(this.state))
  }

  private getFromState(key: stateKey) {
    return this.state[key]
  }

  public getUserInput(): UserInputObject | undefined {
    console.log('AppStateService', 'getUserInput')
    return this.state.userInput
  }

  public setUserInput(userInput: UserInputObject) {
    console.log('AppStateService', 'setUserInput', userInput)
    this.state.userInput = userInput
    this.setState()
  }

  public getChartPace(): ChartPaceObject | undefined {
    console.log('AppStateService', 'getChartPace')
    return this.state.paceChart
  }

  public setPaceChart(paceChart: ChartPaceObject) {
    console.log('AppStateService', 'setPaceChart', paceChart)
    this.state.paceChart = paceChart
    this.setState()
  }
}
