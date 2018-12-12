import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAssetsComponent } from './your-assets.component';

describe('YourAssetsComponent', () => {
  let component: YourAssetsComponent;
  let fixture: ComponentFixture<YourAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
