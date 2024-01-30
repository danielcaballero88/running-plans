import {
  PaceType,
  Plan,
  RunType,
  WorkoutType,
} from 'src/app/components/running-plan/plans/types'

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
              paceType: PaceType.Recovery,
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
              paceType: PaceType._5K,
            },
            {
              type: 'message',
              msg: '1:00 Recovery between intervals',
            },
          ],
        },
        {
          title: '7 Minute Run',
          type: WorkoutType.RecoveryRun,
          subtype: undefined,
          items: [
            {
              type: 'run',
              time: '5:00',
              paceType: PaceType.Recovery,
            },
          ],
        },
        {
          title: 'Next Speed Run',
          type: WorkoutType.SpeedRun,
          subtype: RunType.Intervals,
          items: [
            {
              type: 'message',
              msg: '5:00 Warm Up',
            },
            {
              type: 'interval',
              time: '1:00',
              paceType: PaceType._5K,
            },
            {
              type: 'interval',
              time: '2:00',
              paceType: PaceType._10K,
            },
            {
              type: 'interval',
              time: '1:00',
              paceType: PaceType._5K,
            },
            {
              type: 'interval',
              amount: 2,
              time: '0:45',
              paceType: PaceType.Mile,
            },
            {
              type: 'interval',
              time: '2:00',
              paceType: PaceType._10K,
            },
            {
              type: 'interval',
              time: '1:00',
              paceType: PaceType._5K,
            },
            {
              type: 'interval',
              time: '0:45',
              paceType: PaceType.Mile,
            },
            {
              type: 'interval',
              time: '0:30',
              paceType: PaceType.Best,
            },
            {
              type: 'interval',
              time: '0:15',
              paceType: PaceType.Best,
            },
            {
              type: 'message',
              msg: '1:00 Recovery between intervals',
            },
          ],
        },
        {
          title: 'One Mile Run',
          type: WorkoutType.LongRun,
          subtype: undefined,
          items: [
            {
              type: 'message',
              msg: '1.6k / One Mile Run', // TODO: change to have 'distance' instead of 'time' and parse it correctly
            },
          ],
        },
      ],
    },
  ],
}
