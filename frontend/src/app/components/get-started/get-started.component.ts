import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Distance } from 'src/app/services/pace-chart-types'
import { PaceChartService } from 'src/app/services/pace-chart.service'
import { PaceChart } from '../../services/pace-chart-class'

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
    console.warn(this.userInputForm.value)
    this.paceChartService.getPaceChartData()
    const { distance, hours, minutes } = this.userInputForm.value
    const paceChart: PaceChart = this.paceChartService.getPaceChartForInput(
      distance as Distance,
      Number(hours),
      Number(minutes)
    )
    console.log('onSubmit -> ', paceChart)
  }
}
