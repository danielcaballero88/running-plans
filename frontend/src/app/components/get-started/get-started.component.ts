import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { UserInputObject } from 'src/app/components/get-started/types'
import { AppStateService } from 'src/app/services/app-state-service/app-state-service.service'
import { PaceChart } from '../../services/pace-chart-service/models/pace-chart-class'
import { PaceChartService } from '../../services/pace-chart-service/pace-chart.service'
import { Distance } from '../../types/pace-chart-types'

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent implements OnInit, OnDestroy {
  distanceEnum = Distance
  userInput?: UserInputObject

  constructor(
    private formBuilder: FormBuilder,
    private paceChartService: PaceChartService,
    private appState: AppStateService
  ) {}

  userInputForm = this.formBuilder.group({
    distance: ['', Validators.required],
    hours: [
      '',
      [
        Validators.required,
        Validators.maxLength(2),
        Validators.max(10),
        Validators.pattern(/[0-9]/),
      ],
    ],
    minutes: [
      '',
      [
        Validators.required,
        Validators.maxLength(2),
        Validators.max(59),
        Validators.pattern(/[0-9]/),
      ],
    ],
  })

  ngOnInit(): void {
    console.log('GetStartedComponent.ngOnInit')
    // Get current app state
    this.userInput = this.appState.getUserInput()
    if (this.userInput) {
      this.userInputForm.setValue({
        distance: this.userInput.distance.toString(),
        hours: this.userInput.hours.toString(),
        minutes: this.userInput.minutes.toString(),
      })
    }
  }

  ngOnDestroy(): void {
    console.log('GetStartedComponent.ngOnDestroy')
  }

  onSubmit() {
    console.log('onSubmit')
    console.warn(this.userInputForm.value)

    // Parse input to proper types and set it in app state
    const { distance, hours, minutes } = this.userInputForm.value
    const _distance = distance as Distance
    const _hours = Number(hours)
    const _minutes = Number(minutes)
    this.appState.setUserInput({
      distance: _distance,
      hours: _hours,
      minutes: _minutes,
    })

    // Get pace chart for the given input and set in in app state
    const paceChart: PaceChart = this.paceChartService.getPaceChartForInput(
      _distance,
      _hours,
      _minutes
    )
    console.log('paceChart: ', paceChart)
    this.appState.setPaceChart(paceChart.chart)
  }
}
