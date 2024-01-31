import {
  PaceType,
  Plan,
  RunItemType,
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
              type: RunItemType.Run,
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
              type: RunItemType.TimeIntervals,
              amount: 8,
              time: '1:00',
              paceType: PaceType._5K,
            },
            {
              type: RunItemType.Message,
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
              type: RunItemType.Run,
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
              type: RunItemType.Message,
              msg: '5:00 Warm Up',
            },
            {
              type: RunItemType.TimeInterval,
              time: '1:00',
              paceType: PaceType._5K,
            },
            {
              type: RunItemType.TimeInterval,
              time: '2:00',
              paceType: PaceType._10K,
            },
            {
              type: RunItemType.TimeInterval,
              time: '1:00',
              paceType: PaceType._5K,
            },
            {
              type: RunItemType.TimeIntervals,
              amount: 2,
              time: '0:45',
              paceType: PaceType.Mile,
            },
            {
              type: RunItemType.TimeInterval,
              time: '2:00',
              paceType: PaceType._10K,
            },
            {
              type: RunItemType.TimeInterval,
              time: '1:00',
              paceType: PaceType._5K,
            },
            {
              type: RunItemType.TimeInterval,
              time: '0:45',
              paceType: PaceType.Mile,
            },
            {
              type: RunItemType.TimeInterval,
              time: '0:30',
              paceType: PaceType.Best,
            },
            {
              type: RunItemType.TimeInterval,
              time: '0:15',
              paceType: PaceType.Best,
            },
            {
              type: RunItemType.Message,
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
              type: RunItemType.DistanceInterval,
              distance: '1.6km',
              paceType: PaceType.Mile,
            },
          ],
        },
      ],
    },
    {
      weeksToGo: 7,
      runs: [
        {
          type: WorkoutType.RecoveryRun,
          title: 'Ten Minute Run',
          items: [
            {
              type: RunItemType.Run,
              time: '10:00',
              paceType: PaceType.Recovery,
            },
          ],
        },
        {
          title: 'On the Move',
          type: WorkoutType.SpeedRun,
          subtype: RunType.Intervals,
          items: [
            {
              type: RunItemType.Message,
              msg: '5:00 Warm Up',
            },
            {
              type: RunItemType.TimeInterval,
              time: '0:30',
              paceType: PaceType.Mile,
            },
            {
              type: RunItemType.TimeInterval,
              time: '1:00',
              paceType: PaceType._5K,
            },
            {
              type: RunItemType.TimeInterval,
              time: '0:30',
              paceType: PaceType.Mile,
            },
            {
              type: RunItemType.TimeInterval,
              time: '2:00',
              paceType: PaceType._10K,
            },
            {
              type: RunItemType.TimeInterval,
              time: '0:30',
              paceType: PaceType.Mile,
            },
            {
              type: RunItemType.TimeInterval,
              time: '1:00',
              paceType: PaceType._5K,
            },
            {
              type: RunItemType.TimeInterval,
              time: '0:30',
              paceType: PaceType.Mile,
            },
            {
              type: RunItemType.Message,
              msg: '45 seconds recovery between all intervals',
            },
          ],
        },
        {
          type: WorkoutType.RecoveryRun,
          title: '12 Minute Run',
          items: [
            {
              type: RunItemType.Run,
              time: '12:00',
              paceType: PaceType.Recovery,
            },
          ],
        },
        {
          title: 'Faster Fun',
          type: WorkoutType.SpeedRun,
          subtype: RunType.Intervals,
          items: [
            {
              type: RunItemType.TimeInterval,
              time: '5:00',
              paceType: PaceType.WarmUp,
            },
            {
              type: RunItemType.TimeInterval,
              time: '2:00',
              paceType: PaceType.Mile,
            },
            {
              type: RunItemType.TimeInterval,
              time: '0:30',
              paceType: PaceType._10K,
            },
            {
              type: RunItemType.TimeInterval,
              time: '1:30',
              paceType: PaceType.Mile,
            },
            {
              type: RunItemType.TimeInterval,
              time: '0:30',
              paceType: PaceType._10K,
            },
            {
              type: RunItemType.TimeInterval,
              time: '1:00',
              paceType: PaceType.Mile,
            },
            {
              type: RunItemType.TimeInterval,
              time: '0:30',
              paceType: PaceType._10K,
            },
            {
              type: RunItemType.TimeInterval,
              time: '1:00',
              paceType: PaceType.Mile,
            },
            {
              type: RunItemType.TimeInterval,
              time: '0:30',
              paceType: PaceType._10K,
            },
            {
              type: RunItemType.TimeInterval,
              time: '0:30',
              paceType: PaceType.Best,
            },
            {
              type: RunItemType.Message,
              msg: '30 seconds recovery between all intervals',
            },
          ],
        },
        {
          title: '15 Minute Run',
          type: WorkoutType.LongRun,
          items: [
            {
              type: RunItemType.LongRun,
              time: '15:00',
            },
          ],
        },
      ],
    },
  ],
}
