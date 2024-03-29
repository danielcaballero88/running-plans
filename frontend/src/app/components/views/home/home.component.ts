import { AfterViewInit, Component } from '@angular/core'
import { PaceChartService } from 'src/app/services/pace-chart-service/pace-chart.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  constructor(private paceChartService: PaceChartService) {}

  ngAfterViewInit() {
    // TODO: remove this?
    console.log('HomeComponent.ngAfterViewInit')
    console.log('Getting Pace Chart Data')
    this.paceChartService.getPaceChartData()
  }
}
