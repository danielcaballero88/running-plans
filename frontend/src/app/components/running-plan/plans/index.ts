import { plan5k } from 'src/app/components/running-plan/plans/5k'
import {
  Plan,
  RunItemObj,
  RunObj,
  WeekObj,
} from 'src/app/components/running-plan/plans/shared'
import { Distance, PaceChartObject } from 'src/app/types/pace-chart-types'

export class RunningPlan {
  distance: Distance
  paceChartObject: PaceChartObject
  plan?: Plan

  constructor(distance: Distance, paceChartObject: PaceChartObject) {
    this.distance = distance
    this.paceChartObject = paceChartObject

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
    const parsedItems: RunItemObj[] = []
    runObj.items.forEach((item) => {
      let parsedItem: RunItemObj
      switch (item.type) {
        case 'run':
          parsedItem = {
            type: 'message',
            msg: `${item.time} ${item.paceFor} Pace (${
              this.paceChartObject[item.paceFor].pace
            })`,
          }
          break
        case 'interval':
          if (item.amount) {
            parsedItem = {
              type: 'message',
              msg: `${item.amount} x ${item.time} ${item.paceFor} Pace (${
                this.paceChartObject[item.paceFor].pace
              })`,
            }
          } else {
            parsedItem = {
              type: 'message',
              msg: `${item.time} ${item.paceFor} Pace (${
                this.paceChartObject[item.paceFor].pace
              })`,
            }
          }
          break
        case 'message':
          parsedItem = { ...item }
          break
      }
      parsedItems.push(parsedItem)
    })
    return { ...runObj, items: parsedItems }
  }
}
