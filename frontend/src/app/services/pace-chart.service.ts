import { Injectable } from '@angular/core'
import { paceChartData } from './paceChartData'

@Injectable({
  providedIn: 'root',
})
export class PaceChartService {
  constructor() {}

  getPaceChartData() {
    console.log('PaceChartService.getPaceChartData')
    console.log(paceChartData)
  }
}
