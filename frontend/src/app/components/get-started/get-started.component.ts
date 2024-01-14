import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { PaceChart } from '../../services/pace-chart-service/models/pace-chart-class'
import { PaceChartService } from '../../services/pace-chart-service/pace-chart.service'
import { Distance } from '../../types/pace-chart-types'

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent {
  distanceEnum = Distance

  constructor(
    private formBuilder: FormBuilder,
    private paceChartService: PaceChartService
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

  onSubmit() {
    console.log('onSubmit')
    console.warn(this.userInputForm.value)
    this.paceChartService.getPaceChartData()
    const { distance, hours, minutes } = this.userInputForm.value
    const paceChart: PaceChart = this.paceChartService.getPaceChartForInput(
      distance as Distance,
      Number(hours),
      Number(minutes)
    )
    console.log('paceChart: ', paceChart)
  }
}
