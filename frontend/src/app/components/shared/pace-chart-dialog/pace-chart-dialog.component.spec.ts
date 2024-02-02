import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PaceChartDialogButtonComponent } from './pace-chart-dialog.component'

describe('PaceChartDialogComponent', () => {
  let component: PaceChartDialogButtonComponent
  let fixture: ComponentFixture<PaceChartDialogButtonComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaceChartDialogButtonComponent],
    })
    fixture = TestBed.createComponent(PaceChartDialogButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
