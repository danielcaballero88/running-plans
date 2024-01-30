import {
  Plan,
  RunType,
  WorkoutType,
} from 'src/app/components/running-plan/plans/shared'
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
              time: '5:00',
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
              amount: 8,
              time: '1:00',
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
