import { distances } from 'src/app/services/pace-chart-constants'
import { Distance } from 'src/app/services/pace-chart-types'

export class Pace {
  hours: number
  minutes: number
  seconds: number

  constructor(hours: number, minutes: number, seconds: number) {
    this.hours = hours
    this.minutes = minutes
    this.seconds = seconds
  }

  static fromDistanceAndTime(
    distance: Distance,
    hours: number,
    minutes: number
  ): Pace {
    // Calculate pace
    const secondsTotal = hours * 60 * 60 + minutes * 60
    const secondsPerKm = secondsTotal / distances[distance]
    console.log('secondsPerKm', secondsPerKm)

    const minutesPerKm = Math.floor(secondsPerKm / 60)
    const secondsPerKmRemainder = secondsPerKm % 60

    const hoursPerKm = Math.floor(minutesPerKm / 60)
    const minutesPerKmRemainder = minutesPerKm % 60

    return new Pace(hoursPerKm, minutesPerKmRemainder, secondsPerKmRemainder)
  }

  static fromString(
    paceString: string
  ) {
    console.log(paceString.split(':'))
  }

  toString(): string {
    const _toString = (num: number) => num.toString().padStart(2, '0')
    return (
      _toString(this.hours) +
      ':' +
      _toString(this.minutes) +
      ':' +
      _toString(this.seconds)
    )
  }
}
