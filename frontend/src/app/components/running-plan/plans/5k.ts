import {
  Plan,
  RunType,
  WorkoutType,
} from 'src/app/components/running-plan/plans/shared'
import { TimeSpan } from 'src/app/models/timeSpan'
import { Distance } from 'src/app/types/pace-chart-types'

export const plan5k: Plan = {
  weeks: [
    {
      weeksToGo: 8,
      runs: [
        {
          title: '5 Minute Run',
          type: WorkoutType.RecoveryRun,
          subtype: undefined,
          items: [
            {
              type: 'run',
              // title: '5:00 Recovery Run',
              time: new TimeSpan(0, 5, 0),
              paceFor: Distance.recovery,
            },
          ],
        },
        {
          title: 'First Speed Run',
          type: WorkoutType.SpeedRun,
          subtype: RunType.Intervals,
          items: [
            {
              type: 'interval',
              time: new TimeSpan(0, 5, 0),
              paceFor: Distance._5k,
            },
            {
              type: 'message',
              msg: '1:00 Recovery between intervals',
            },
          ],
        },
      ],
    },
  ],
}
