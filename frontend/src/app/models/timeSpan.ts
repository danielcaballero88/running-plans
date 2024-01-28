export class TimeSpan {
  seconds: number
  minutes: number
  hours: number

  constructor(seconds: number, minutes: number, hours: number) {
    this.seconds = seconds
    this.minutes = minutes
    this.hours = hours
  }

  /**
   * Parse string into TimeSpan
   * Input string can have or miss the hour
   * 1. With hour: hh:mm:ss
   * 2. Without hour: mm:ss
   */
  static fromString(stringTimeSpan: string) {
    const parts = stringTimeSpan.split(':').map((x) => Number(x))
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
      throw Error(`wrong type span given: ${stringTimeSpan}`)
    }
    return new TimeSpan(seconds, minutes, hours)
  }

  private formatNumber(num: number): string {
    return num.toString().padStart(2, '0')
  }

  toString() {
    if (this.hours === 0) {
      return `${this.formatNumber(this.minutes)}:${this.formatNumber(
        this.seconds,
      )}`
    } else {
      return `${this.formatNumber(this.hours)}:${this.formatNumber(
        this.minutes,
      )}:${this.formatNumber(this.seconds)}`
    }
  }
}
