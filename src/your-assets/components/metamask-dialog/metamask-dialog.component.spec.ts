import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetamaskDialogComponent } from './metamask-dialog.component';

describe('MetamaskDialogComponent', () => {
  let component: MetamaskDialogComponent;
  let fixture: ComponentFixture<MetamaskDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetamaskDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetamaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
