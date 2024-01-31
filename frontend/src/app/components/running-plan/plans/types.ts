export enum WorkoutType {
  SpeedRun = 'Speed Run',
  LongRun = 'Long Run',
  RecoveryRun = 'Recovery Run',
}

export const workoutTypes = {
  [WorkoutType.SpeedRun]:
    'Building strength through speed training is important as you prepare. Throughout this plan you’ll be introduced to a variety of speed workouts and drills that will make you faster. You’ll get to do short and long intervals, fartlek, hill workouts and tempo runs. (See Types of Runs in the Glossary for definitions of these).',
  [WorkoutType.LongRun]:
    'You need endurance training to help prepare your body and mind to go the distance on race day. You will work on endurance and pacing with weekly Long Runs. It also helps you get familiar with the physical and mental challenges that you might face during a race. This run should be run at a comfortable pace, and as a Progression Run (See Types of Runs in the Glossary for definition of Progression Run).',
  [WorkoutType.RecoveryRun]:
    'Recovering from your workout days is just as important as the workouts themselves. Use these days to run easy and based on how you feel to help you recover at the highest quality possible after intense training. Each week of training includes two recovery runs. These include runs with Shalane Flanagan and some of our best NRC Coaches. Recovery Runs are just as important as your hard workouts.',
}

export enum RunType {
  ProgressionRun = 'Progression Run',
  Intervals = 'Intervals',
  Fartlek = 'Fartlek',
  Hills = 'Hills',
  TempoRun = 'Tempo Run',
}

export const runTypes = {
  [RunType.ProgressionRun]:
    'Progression Runs improve stamina and allow the body to adapt to the stress of running. Build your pace over the course of each run by starting at a slower than Recovery Run pace and finishing at a faster than Recovery Run pace. Over the course of the run you will average your Recovery Run pace. This progression from the slowest running of the run to the fastest running of the run allows your body to ease into the run and adjust to the activity of running in a natural way. Your Long and Recovery Runs should be run as Progression Runs.',
  [RunType.Intervals]:
    'Intervals refer to a Speed Run session that includes a set of running and rest intervals. There are any number of variations one could use when doing an interval Speed Run. The distance or duration as well as the pace and effort of the running interval can remain the same or change over the course of the workout. The recovery interval duration is another element of the Speed Run that can remain static or change during the workout. Ideally a session like this takes place on a track but does not need to. Any location that allows you to run freely is suitable for an interval-based Speed Run.',
  [RunType.Fartlek]:
    'Fartlek is loosely translated from Swedish to “speed play”. Fartlek works on speed and strength by alternating distances and paces during a continuous run. An example Fartlek workout structure could be one minute running easy followed by one minute running hard, repeated for a certain amount of minutes, miles or alternating every city block.',
  [RunType.Hills]:
    'Hill workouts develop speed and form. It takes extra effort to run uphill so you do not need to run as fast as you would on a flat section. While running uphill, remain in control of your breathing. Don’t lean too far forward. A light lean with the chin leading the chest is enough. Running up hills is a great way to develop speed and strength with minimal pounding on the legs. It’s best to use effort as a guide rather than pace when doing a hill workout.',
  [RunType.TempoRun]:
    'A Tempo Run is a hard but controlled pace that can be run as long intervals or a steady run of 1-10 miles. The purpose of a Tempo Run is to build mental and physical endurance and to become comfortable with being uncomfortable.',
}

export enum PaceType {
  Best = 'Best',
  WarmUp = 'WarmUp',
  Mile = 'Mile',
  _5K = '5K',
  _10K = '10K',
  Tempo = 'Tempo',
  Recovery = 'Recovery',
}

export enum RunItemType {
  TimeInterval = 'time interval',
  TimeIntervals = 'time intervals',
  DistanceInterval = 'distance interval',
  DistanceIntervals = 'distance intervals',
  Run = 'run',
  LongRun = 'long run',
  Message = 'message',
}

interface TimeIntervalRunItemObj {
  type: RunItemType.TimeInterval
  time: string
  paceType: PaceType
}

interface TimeIntervalsRunItemObj {
  type: RunItemType.TimeIntervals
  time: string
  paceType: PaceType
  amount: number
}

interface DistanceIntervalRunItemObj {
  type: RunItemType.DistanceInterval
  distance: string
  paceType: PaceType
}

interface DistanceIntervalsRunItemObj {
  type: RunItemType.DistanceIntervals
  distance: string
  paceType: PaceType
  amount: number
}

interface RunRunItemObj {
  type: RunItemType.Run
  time: string
  paceType: PaceType
}

interface LongRunRunItemObj {
  type: RunItemType.LongRun
  time: string
}

interface MessageRunItemObj {
  type: RunItemType.Message
  msg: string
}

export type RunItemObj =
  | TimeIntervalRunItemObj
  | TimeIntervalsRunItemObj
  | DistanceIntervalRunItemObj
  | DistanceIntervalsRunItemObj
  | RunRunItemObj
  | LongRunRunItemObj
  | MessageRunItemObj

export interface RunObj {
  title: string
  type: WorkoutType
  subtype?: RunType
  items: RunItemObj[]
}

export interface WeekObj {
  weeksToGo: number
  runs: RunObj[]
}

export interface Plan {
  weeks: WeekObj[]
}
