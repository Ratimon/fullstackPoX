import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAssetDialogComponent } from './upload-asset-dialog.component';

describe('UploadAssetDialogComponent', () => {
  let component: UploadAssetDialogComponent;
  let fixture: ComponentFixture<UploadAssetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadAssetDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAssetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
