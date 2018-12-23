import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatDialogModule,
  MatListModule,
  MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UploadComponent } from './components/upload/upload.component';
import { DialogComponent } from './components/dialog/dialog.component';

import { YourAssetsComponent } from './containers/your-assets/your-assets.component';


export const ROUTES: Routes = [
  {
    path: 'upload',
    component: UploadComponent,
  }
];

@NgModule({
    declarations: [
      YourAssetsComponent,
      UploadComponent,
      DialogComponent
    ],
    imports: [
      CommonModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatButtonModule,
      MatToolbarModule,
      MatDialogModule,
      MatListModule,
      MatProgressSpinnerModule
    ],
    exports: [
    YourAssetsComponent,
    ],
    entryComponents: [DialogComponent], // Add the DialogComponent as entry component
    providers: []
  })
  export class YourAssetsModule { }
  