import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PaceChartComponent } from './pace-chart.component'

describe('PaceChartComponent', () => {
  let component: PaceChartComponent
  let fixture: ComponentFixture<PaceChartComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaceChartComponent],
    })
    fixture = TestBed.createComponent(PaceChartComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
