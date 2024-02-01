import { Plan } from 'src/app/components/running-plan/plans/types'

export const plan5k: Plan = {
  weeks: [
    {
      title: '08 WEEKS TO GO',
      runs: [
        {
          runType: 'RECOVERY RUN',
          runTitle: '5 Minute Run',
          items: ['5:00 Recovery Run'],
        },
        {
          runType: 'SPEED RUN',
          runTitle: 'First Speed Run',
          runSubtype: 'Intervals',
          items: ['8 x 1:00 5K Pace', '1:00 Recovery between all intervals'],
        },
        {
          runType: 'RECOVERY RUN',
          runTitle: '7 Minute Run',
          items: ['7:00 Recovery Run'],
        },
        {
          runType: 'SPEED RUN',
          runTitle: 'Next Speed Run',
          runSubtype: 'Intervals',
          items: [
            '5:00 Warm Up',
            '1:00 5K Pace',
            '2:00 10K Pace',
            '1:00 5K Pace',
            '2 x 0:45 Mile Pace',
            '2:00 10K Pace',
            '1:00 5K Pace',
            '0:45 Mile Pace',
            '0:30 Best Pace',
            '0:15 Best Pace',
            '1:00 Recovery between all intervals',
          ],
        },
        {
          runType: 'LONG RUN',
          runTitle: 'One Mile Run',
          items: ['1.6k/One Mile Run'],
        },
      ],
    },
    {
      title: '07 WEEKS TO GO',
      runs: [
        {
          runType: 'RECOVERY RUN',
          runTitle: 'Ten Minute Run',
          items: ['10:00 Recovery Run'],
        },
        {
          runType: 'SPEED RUN',
          runTitle: 'On the Move',
          runSubtype: 'Intervals',
          items: [
            '5:00 Warm Up',
            '0:30 Mile Pace',
            '1:00 5K Pace',
            '0:30 Mile Pace',
            '2:00 10K Pace',
            '0:30 Mile Pace',
            '1:00 5K Pace',
            '0:30 Mile Pace',
            '45 seconds recovery between all intervals',
          ],
        },
        {
          runType: 'RECOVERY RUN',
          runTitle: '12 Minute Run',
          items: ['12:00 Recovery Run'],
        },
        {
          runType: 'SPEED RUN',
          runTitle: 'Faster Fun',
          runSubtype: 'Intervals',
          items: [
            '5:00 Warm Up',
            '2:00 Mile Pace',
            '0:30 10K Pace',
            '1:30 Mile Pace',
            '0:30 10K Pace',
            '1:00 Mile Pace',
            '0:30 10K pace',
            '1:00 Mile Pace',
            '0:30 10K Pace',
            '0:30 Best Pace',
            '30 seconds recovery between all intervals',
          ],
        },
        {
          runType: 'LONG RUN',
          runTitle: '15 Minute Run',
          items: ['15:00 Run'],
        },
      ],
    },
    {
      title: '06 WEEKS TO GO',
      runs: [
        {
          runType: 'RECOVERY RUN',
          runTitle: 'Two Mile Run',
          items: ['3.2K/2 Mile Run'],
        },
        {
          runType: 'SPEED RUN',
          runTitle: 'How Fartlek Can You go?',
          runSubtype: 'Fartlek',
          items: [
            '2 x 1:30 10K Pace',
            '3 x 1:00 5K Pace',
            '4 x 0:30 Mile Pace',
            '5 x 0:15 Best Pace',
            'This is a continuous Fartlek run. Each interval of “hard running” is followed by recovery running done at an easy effort.',
            'Duration of the recovery are equal to the length of the preceding “hard” interval that was run.',
          ],
        },
        {
          runType: 'RECOVERY RUN',
          runTitle: 'Go 20',
          items: ['20:00 Recovery Run'],
        },
        {
          runType: 'SPEED RUN',
          runTitle: 'One Hard. One Easy Fartlek',
          items: [
            '5:00 Warm Up',
            '15:00 Fartlek run',
            'Effort alternates between 1:00 of Hard Running and 1:00 of Easy Running.',
          ],
        },
        {
          runType: 'LONG RUN',
          runTitle: 'Easy Run',
          items: ['25:00 Run'],
        },
      ],
    },
    {
      title: '05 WEEKS TO GO',
      runs: [
        {
          runType: 'RECOVERY RUN',
          runTitle: 'End of Day Run',
          items: ['25:00 Recovery Run'],
        },
        {
          runType: 'SPEED RUN',
          runTitle: 'Rhythm and Roll',
          runSubtype: 'Intervals',
          items: [
            '5:00 Warm Up',
            '0:30 Mile Pace',
            '4 x 0:30 5K Pace',
            '3:00 10K Pace',
            '4 x 0:30 5K Pace',
            '0:30 Mile Pace',
            'Recovery is 30 seconds between all intervals',
          ],
        },
        {
          runType: 'RECOVERY RUN',
          runTitle: 'Another Mile Run',
          items: ['1.6K/One Mile Run'],
        },
        {
          runType: 'SPEED RUN',
          runTitle: 'Speed Run',
          runSubtype: 'Intervals',
          items: [
            '5:00 Warm Up',
            '2:00 5K Pace',
            '1:00 Mile Pace',
            '2 x 0:15 Best Pace',
            'Repeat entire series 3 x’s',
            '1:00 Recovery after 5K Pace',
            '0:30 Recovery after Mile Pace and first Best Pace interval',
            '2:00 Recovery between sets',
          ],
        },
        {
          runType: 'LONG RUN',
          runTitle: 'Just A Run',
          items: ['30:00 Run'],
        },
      ],
    },
    {
      title: '04 WEEKS TO GO',
      runs: [
        {
          runType: 'RECOVERY RUN',
          runTitle: 'Morning Run',
          items: ['25:00 Recovery Run'],
        },
        {
          runType: 'SPEED RUN',
          runTitle: 'In the Zone',
          runSubtype: 'Intervals',
          items: [
            '5:00 Warm Up',
            '5 x 4:00 5K Pace',
            '2:00 recovery after 1st and 3rd interval.',
            '2:30 recovery after 2nd and 4th intervals',
          ],
        },
        {
          runType: 'RECOVERY RUN',
          runTitle: 'Don’t Wanna Run Run',
          items: ['25:00 Recovery Run'],
        },
        {
          runType: 'SPEED RUN',
          runTitle: 'Out Strong Back Fast',
          runSubtype: 'Tempo Run',
          items: [
            '5:00 Warm Up',
            '23:00 Tempo Run',
            'First 12:00 running out strong and controlled',
            'Last 11:00 running back progressively faster.',
            'Goal is to cover same distance out and back.',
          ],
        },
        {
          runType: 'LONG RUN',
          runTitle: 'Fuel the Run',
          items: ['33:00 Recovery Run'],
        },
      ],
    },
    {
      title: '03 WEEKS TO GO',
      runs: [
        {
          runType: 'RECOVERY RUN',
          runTitle: 'I Need A Win Run',
          items: ['30:00 Recovery Run'],
        },
        {
          runType: 'SPEED RUN',
          runTitle: 'Go Fast',
          runSubtype: 'Intervals',
          items: [
            '5:00 Warm Up',
            '0:30 Mile Pace',
            '0:15 Best Pace',
            '0:45 Mile Pace',
            '0:15 Best Pace',
            '1:00 Mile Pace',
            '0:15 Best Pace',
            '1:15 Mile Pace',
            '0:15 Best Pace',
            '1:30 Mile Pace',
            '0:15 Best Pace',
            'Recovery will be 30 seconds after first set of Mile and Best Pace intervals and increase by 15 seconds after each subsequent set',
          ],
        },
        {
          runType: 'RECOVERY RUN',
          runTitle: 'Breaking Through Barriers',
          items: ['31:00 Recovery Run'],
        },
        {
          runType: 'SPEED RUN',
          runTitle: 'Tempo Run',
          runSubtype: 'Tempo Run',
          items: ['7:00 Warm Up', '25:00 Tempo Run'],
        },
        {
          runType: 'LONG RUN',
          runTitle: 'Four Mile Run',
          items: ['6.5K/4 Mile Run'],
        },
      ],
    },
    {
      title: '02 WEEKS TO GO',
      runs: [
        {
          runType: 'RECOVERY RUN',
          runTitle: 'Suckcess Run',
          items: ['35:00 Recovery Run'],
        },
        {
          runType: 'SPEED RUN',
          runTitle: 'Runner Up Hill Workout',
          items: [
            '5:00 Warm Up',
            '0:45 10K effort',
            '0:15 Best effort',
            'Repeat series 5 x’s',
            'Recovery is 75 seconds after 10K effort And 45 seconds recovery after Best effort',
          ],
        },
        {
          runType: 'RECOVERY RUN',
          runTitle: 'Stress Free Run',
          items: ['25:00 Recovery Run'],
        },
        {
          runType: 'SPEED RUN',
          runTitle: 'Go Team Go! BTC!',
          runSubtype: 'Intervals',
          items: [
            '8:00 Warm Up',
            '3:00 10K Pace',
            '1:00 Mile Pace',
            '2:00 5K Pace',
            '1:00 Mile Pace',
            '2:00 5K Pace',
            '1:00 Mile Pace',
            '5:00 10K Pace',
            '0:30 Best Pace',
            '1:00 Recovery between all intervals except after first 10K Pace interval which will be 1:30 recovery',
          ],
        },
        {
          runType: 'LONG RUN',
          runTitle: '5K Run',
          items: ['5K/3.1 Mile Run'],
        },
      ],
    },
    {
      title: '01 WEEK TO GO',
      runs: [
        {
          runType: 'RECOVERY RUN',
          runTitle: '5K Head Starts',
          items: ['5K/3.1 Mile Recovery Run'],
        },
        {
          runType: 'SPEED RUN',
          runTitle: 'Bring It Down Tempo Run',
          items: [
            '5:00 Warmup',
            '5:00 Recovery Run Pace',
            '4:00 10K Pace',
            '3:00 5K Pace',
            '2:00 Mile Pace',
            '1:00 Best Pace',
            'This is to be run as a 15:00 Progression Tempo Run',
          ],
        },
        {
          runType: 'RECOVERY RUN',
          runTitle: 'Big Day Run',
          items: ['25:00 Recovery Run'],
        },
        {
          runType: 'RECOVERY RUN',
          runTitle: '1K RUN',
          items: ['1K/0.62 Mile Run'],
        },
        {
          runType: 'RACE DAY',
          runTitle: '5K Race',
          items: ['5K/3.1 Miles'],
        },
      ],
    },
  ],
}
