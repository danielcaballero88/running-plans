import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningPlanComponent } from './running-plan.component';

describe('RunningPlanComponent', () => {
  let component: RunningPlanComponent;
  let fixture: ComponentFixture<RunningPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunningPlanComponent]
    });
    fixture = TestBed.createComponent(RunningPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
