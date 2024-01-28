import { Distance } from 'src/app/types/pace-chart-types'
import { distances } from '../pace-chart-constants'

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
    minutes: number,
  ): Pace {
    // Calculate pace
    const secondsTotal = hours * 60 * 60 + minutes * 60
    const secondsPerKm = secondsTotal / distances[distance]

    const minutesPerKm = Math.floor(secondsPerKm / 60)
    const secondsPerKmRemainder = secondsPerKm % 60

    const hoursPerKm = Math.floor(minutesPerKm / 60)
    const minutesPerKmRemainder = minutesPerKm % 60

    return new Pace(hoursPerKm, minutesPerKmRemainder, secondsPerKmRemainder)
  }

  static fromString(paceString: string) {
    const parts = paceString.split(':').map((x) => Number(x))
    let seconds = 0
    let minutes = 0
    let hours = 0
    if (parts.length === 2) {
      seconds = parts[0]
      minutes = parts[1]
      hours = 0
    } else if (parts.length === 3) {
      seconds = parts[0]
      minutes = parts[1]
      hours = parts[2]
    } else {
      throw Error(`wrong type span given: ${paceString}`)
    }
    return new Pace(hours, minutes, seconds)
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
