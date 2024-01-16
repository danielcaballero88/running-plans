import { Component, Input } from '@angular/core'
import { PaceChart } from 'src/app/services/pace-chart-service/models/pace-chart-class'

@Component({
  selector: 'app-pace-chart',
  templateUrl: './pace-chart.component.html',
  styleUrls: ['./pace-chart.component.scss'],
})
export class PaceChartComponent {
  @Input() paceChart?: PaceChart
}
