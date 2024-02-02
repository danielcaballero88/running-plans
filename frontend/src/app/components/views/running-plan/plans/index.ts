import { PaceChart } from 'src/app/services/pace-chart-service/models/pace-chart-class'
import { Distance, PaceChartObject } from 'src/app/types/pace-chart-types'
import { plan5k } from './5k'
import { PaceType, Plan, RunObj, WeekObj } from './types'

export class RunningPlan {
  distance: Distance
  paceChart: PaceChart
  plan?: Plan

  constructor(distance: Distance, paceChartObject: PaceChartObject) {
    this.distance = distance
    this.paceChart = new PaceChart(paceChartObject)

    switch (distance) {
      case Distance._5k:
        this.plan = this.parsePlan(plan5k)
    }
  }

  private parsePlan(rawPlan: Plan): Plan {
    console.log('parsePlan')
    return { weeks: this.parseWeeks(rawPlan.weeks) }
  }

  private parseWeeks(weeks: WeekObj[]): WeekObj[] {
    console.log('parseWeeks')
    console.log(this)
    return weeks.map((week) => this.parseWeek(week))
  }

  private parseWeek(weekObj: WeekObj): WeekObj {
    console.log('parseWeek')
    console.log(this)
    return { ...weekObj, runs: this.parseRuns(weekObj.runs) }
  }

  private parseRuns(runObjs: RunObj[]): RunObj[] {
    console.log('parseRuns')
    console.log(this)
    return runObjs.map((runObj) => this.parseRun(runObj))
  }

  private parseRun(runObj: RunObj): RunObj {
    console.log('parseRun')
    const parsedItems: string[] = []
    runObj.items.forEach((item) => {
      const parsedItem = this.parseRunItem(item)
      parsedItems.push(parsedItem)
    })
    return { ...runObj, items: parsedItems }
  }

  private parseRunItem(item: string) {
    // Not doing anything at the moment... eventually I can get here the correct
    // pace for the user and this item and append it to the item to simplify planning.
    const parsedItem: string = item
    // Check if there is a pace and get correct value from pace chart if so
    // if (item.includes('Pace')) {
    //   // Get the correct pace and append to item
    //   // ...
    // }
    return parsedItem
  }

  private addPaceToMsg(msg: string, paceType: PaceType): string {
    if ([PaceType.Best, PaceType.WarmUp].includes(paceType)) {
      return msg
    }
    return `${msg} (${this.paceChart.getPaceForPacetype(paceType)})`
  }
}
