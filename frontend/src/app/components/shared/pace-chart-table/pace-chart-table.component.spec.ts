import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PaceChartTableComponent } from './pace-chart-table.component'

describe('PaceChartTableComponent', () => {
  let component: PaceChartTableComponent
  let fixture: ComponentFixture<PaceChartTableComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaceChartTableComponent],
    })
    fixture = TestBed.createComponent(PaceChartTableComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
