export enum WorkoutType {
  SpeedRun = 'Speed Run',
  LongRun = 'Long Run',
  RecoveryRun = 'Recovery Run',
}

export enum RunType {
  ProgressionRun = 'Progression Run',
  Intervals = 'Intervals',
  Fartlek = 'Fartlek',
  Hills = 'Hills',
  TempoRun = 'Tempo Run',
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

export interface RunObj {
  runTitle: string
  runType: string
  runSubtype?: string
  items: string[]
}

export interface WeekObj {
  title: string
  runs: RunObj[]
}

export interface Plan {
  weeks: WeekObj[]
}
