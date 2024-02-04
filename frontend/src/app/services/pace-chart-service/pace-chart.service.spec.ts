import { TestBed } from '@angular/core/testing'

import { PaceChartService } from './pace-chart.service'

describe('PaceChartService', () => {
  let service: PaceChartService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(PaceChartService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
