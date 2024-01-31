import { PaceType } from 'src/app/components/running-plan/plans/types'
import { TimeSpan } from 'src/app/models/timeSpan'
import {
  Distance,
  DistanceString,
  PaceChartObject,
  PaceChartObjects,
} from 'src/app/types/pace-chart-types'
import { available10kPacesInData } from '../data'

const pacetypeToDistance = {
  [PaceType.Best]: 'Best',
  [PaceType.WarmUp]: 'WarmUp',
  [PaceType.Mile]: Distance.mile,
  [PaceType._5K]: Distance._5k,
  [PaceType._10K]: Distance._10k,
  [PaceType.Tempo]: Distance.tempo,
  [PaceType.Recovery]: Distance.recovery,
}

export class PaceChart {
  chart: PaceChartObject

  constructor(chart: PaceChartObject) {
    this.chart = chart
  }

  static fromGiven10kPace(
    chartsData: PaceChartObjects,
    _10kPace: available10kPacesInData,
  ) {
    const chartData = chartsData[_10kPace]
    return new PaceChart(chartData)
  }

  getPaceForPacetype(paceType: PaceType): string {
    if ([PaceType.Best, PaceType.WarmUp].includes(paceType)) {
      return 'Best'
    }
    const distance = pacetypeToDistance[paceType]
    const pace = this.chart[distance as DistanceString].pace
    const parsedPace = TimeSpan.fromString(pace).toString()
    return parsedPace
  }
}
