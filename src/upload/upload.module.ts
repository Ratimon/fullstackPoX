import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UploadComponent } from './upload/upload.component';
import { DialogComponent } from './dialog/dialog.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatListModule,
  MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: UploadComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    UploadComponent,
    DialogComponent
  ],
  exports: [UploadComponent],
  entryComponents: [DialogComponent], // Add the DialogComponent as entry component
  providers: []
})
export class UploadModule {}
