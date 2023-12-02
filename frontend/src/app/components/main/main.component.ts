import { Component } from '@angular/core'
import { PaceChartService } from 'src/app/services/pace-chart.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private paceChartService: PaceChartService) {}

  ngAfterViewInit() {
    this.paceChartService.getPaceChartData()
  }
}
