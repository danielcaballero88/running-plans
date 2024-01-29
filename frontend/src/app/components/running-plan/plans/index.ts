import { plan5k } from 'src/app/components/running-plan/plans/5k'
import { Plan } from 'src/app/components/running-plan/plans/shared'
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
        this.plan = plan5k
    }
  }
}
