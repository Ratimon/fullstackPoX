import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashStepComponent } from './hash-step.component';

describe('HashStepComponent', () => {
  let component: HashStepComponent;
  let fixture: ComponentFixture<HashStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
