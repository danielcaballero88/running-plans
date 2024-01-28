import { Interval } from "src/app/components/running-plan/plans/intervals-class";
import { RunType, WorkoutType } from "src/app/components/running-plan/plans/shared";
import { TimeSpan } from "src/app/models/timeSpan";
import { Pace } from "src/app/services/pace-chart-service/models/pace-class";
import { PaceChartObject } from "src/app/types/pace-chart-types";

export class Plan5K {
  paceChartObject: PaceChartObject
  plan: object

  constructor(paceChartObject: PaceChartObject) {
    this.paceChartObject = paceChartObject

    this.plan = {
      weeks: 8,
      data: [
        {
          weeksToGo: 8,
          data: [
            {
              title: '5 Minute Run',
              type: WorkoutType.RecoveryRun,
              subtype: null,
              time: '00:05:00',
              items: [
                '5:00 Recovery Run'
              ],
              pace: this.paceChartObject.recovery.pace,
            },
            {
              title: 'First Speed Run',
              type: WorkoutType.SpeedRun,
              subtype: RunType.Intervals,
              items: [
                new Interval(new TimeSpan(0, 5, 0), '5K Pace', Pace.fromString(this.paceChartObject["5k"].pace)).toString(8),
                '1:00 Recovery between intervals',
              ],
              pace: this.paceChartObject["5k"].pace,
            },
          ],
        },
      ],
    }
  }
}
