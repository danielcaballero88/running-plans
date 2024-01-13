export class Pace {
  hours: number
  minutes: number
  seconds: number

  constructor(hours: number, minutes: number, seconds: number) {
    this.hours = hours
    this.minutes = minutes
    this.seconds = seconds
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
