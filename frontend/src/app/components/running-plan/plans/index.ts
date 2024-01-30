import { plan5k } from 'src/app/components/running-plan/plans/5k'
import {
  PaceType,
  Plan,
  RunItemObj,
  RunObj,
  WeekObj,
} from 'src/app/components/running-plan/plans/types'
import { PaceChart } from 'src/app/services/pace-chart-service/models/pace-chart-class'
import { Distance, PaceChartObject } from 'src/app/types/pace-chart-types'

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
    const parsedItems: RunItemObj[] = []
    runObj.items.forEach((item) => {
      let parsedItem: RunItemObj
      switch (item.type) {
        case 'run':
          parsedItem = {
            type: 'message',
            msg: `${item.time} ${item.paceType} Pace`,
          }
          parsedItem.msg = this.addPaceToMsg(parsedItem.msg, item.paceType)
          break
        case 'interval':
          if (item.amount) {
            parsedItem = {
              type: 'message',
              msg: `${item.amount} x ${item.time} ${item.paceType} Pace`,
            }
          } else {
            parsedItem = {
              type: 'message',
              msg: `${item.time} ${item.paceType} Pace`,
            }
          }
          parsedItem.msg = this.addPaceToMsg(parsedItem.msg, item.paceType)
          break
        case 'message':
          parsedItem = { ...item }
          break
      }
      parsedItems.push(parsedItem)
    })
    return { ...runObj, items: parsedItems }
  }

  private addPaceToMsg(msg: string, paceType: PaceType): string {
    if (paceType === PaceType.Best) {
      return msg
    }
    return `${msg} (${this.paceChart.getPaceForPacetype(paceType)})`
  }
}
