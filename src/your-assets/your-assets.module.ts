import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// import { reducers } from './store';
import * as fromStore from './store/reducers/index';
// import reducers from './store';
// import { reducer } from './store/reducers';

import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatDialogModule,
  MatListModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule } from '@angular/material';

// import { UploadComponent } from './components/upload/upload.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SteppersComponent } from './containers/steppers/steppers.component';
import { AssetsListsComponent } from './containers/assets-lists/assets-lists.component';

export const ROUTES: Routes = [
  { 
    path: 'assets-lists',
    component: AssetsListsComponent,
    children: [{
      path: 'upload',
      component: DialogComponent
    }]
  },

  {
    path: 'register',
    component: SteppersComponent,
  }
];

@NgModule({
    declarations: [
      AssetsListsComponent,
      // UploadComponent,
      DialogComponent,
      SteppersComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(ROUTES),
      StoreModule.forFeature('yourassets', fromStore.reducers),
      MatButtonModule,
      MatToolbarModule,
      MatCardModule,
      MatDialogModule,
      MatListModule,
      MatStepperModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule
    ],
    exports: [
      // AssetsListsComponent
    ],
    entryComponents: [DialogComponent], // Add the DialogComponent as entry component
    providers: []
  })
  export class YourAssetsModule { }
  