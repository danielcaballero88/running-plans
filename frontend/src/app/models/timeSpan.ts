export class TimeSpan {
  seconds: number
  minutes: number
  hours: number

  constructor(seconds: number, minutes: number, hours: number) {
    // Recalculate
    const secondsTotal = hours * 60 * 60 + minutes * 60 + seconds
    const secondsRemainder = secondsTotal % 60
    const minutesTotal = Math.floor(secondsTotal / 60)
    const minutesRemainder = minutesTotal % 60
    const hoursTotal = Math.floor(minutesTotal / 60)

    this.hours = hoursTotal
    this.minutes = minutesRemainder
    this.seconds = secondsRemainder
  }

  /**
   * Parse string into TimeSpan
   * Input string can have or miss the hour
   * 1. With hour: hh:mm:ss
   * 2. Without hour: mm:ss
   */
  static fromString(stringTimeSpan: string) {
    console.log('fromString', stringTimeSpan)
    const parts = stringTimeSpan.split(':').map((x) => Number(x))
    console.log('parts', parts)
    let seconds = 0
    let minutes = 0
    let hours = 0
    if (parts.length === 2) {
      seconds = parts[1]
      minutes = parts[0]
      hours = 0
    } else if (parts.length === 3) {
      seconds = parts[2]
      minutes = parts[1]
      hours = parts[0]
    } else {
      throw Error(`wrong type span given: ${stringTimeSpan}`)
    }
    return new TimeSpan(seconds, minutes, hours)
  }

  private formatNumber(num: number): string {
    return num.toString().padStart(2, '0')
  }

  toString() {
    let result: string
    if (this.hours === 0) {
      result = `${this.formatNumber(this.minutes)}:${this.formatNumber(
        this.seconds,
      )}`
    } else {
      result = `${this.formatNumber(this.hours)}:${this.formatNumber(
        this.minutes,
      )}:${this.formatNumber(this.seconds)}`
    }
    return result.replace(/^0+/, '')
  }
}
