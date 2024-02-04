import { PaceChart } from 'src/app/services/pace-chart-service/models/pace-chart-class'
import { Distance, PaceChartObject } from 'src/app/types/pace-chart-types'
import { plan10k } from './10k'
import { plan21k } from './21k'
import { plan42k } from './42k'
import { plan5k } from './5k'
import { PaceType, Plan, RunObj, WeekObj } from './types'

export class RunningPlan {
  distance: Distance
  paceChart: PaceChart
  plan?: Plan

  constructor(distance: Distance, paceChartObject: PaceChartObject) {
    this.distance = distance
    this.paceChart = new PaceChart(paceChartObject)

    console.log('RunningPlan.constructor', distance)
    switch (distance) {
      case Distance._5k:
        this.plan = this.parsePlan(plan5k)
        break
      case Distance._10k:
        this.plan = this.parsePlan(plan10k)
        break
      case Distance._21k:
        this.plan = this.parsePlan(plan21k)
        break
      case Distance._42k:
        this.plan = this.parsePlan(plan42k)
        break
      default:
        throw Error(`No plan for distance=${distance}`)
    }
  }

  private parsePlan(rawPlan: Plan): Plan {
    return { weeks: this.parseWeeks(rawPlan.weeks) }
  }

  private parseWeeks(weeks: WeekObj[]): WeekObj[] {
    return weeks.map((week) => this.parseWeek(week))
  }

  private parseWeek(weekObj: WeekObj): WeekObj {
    return { ...weekObj, runs: this.parseRuns(weekObj.runs) }
  }

  private parseRuns(runObjs: RunObj[]): RunObj[] {
    return runObjs.map((runObj) => this.parseRun(runObj))
  }

  private parseRun(runObj: RunObj): RunObj {
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
