import { TimeSpan } from 'src/app/models/timeSpan'
import { Pace } from 'src/app/services/pace-chart-service/models/pace-class'

export class Interval {
  time: TimeSpan
  paceName: string
  pace: Pace

  constructor(time: TimeSpan, paceName: string, pace: Pace) {
    this.time = time
    this.paceName = paceName
    this.pace = pace
  }

  toString(quantity?: number): string {
    let output = `${this.time.toString()} at ${this.paceName}`
    if (quantity) {
      output = `${quantity} x ${output}`
    }
    return output
  }
}
