import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditialStepComponent } from './creditial-step.component';

describe('CreditialStepComponent', () => {
  let component: CreditialStepComponent;
  let fixture: ComponentFixture<CreditialStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditialStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditialStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
