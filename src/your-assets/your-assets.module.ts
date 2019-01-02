// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// import { reducers } from './store';
import * as reducersfromStore from './store/reducers/index';
// import reducers from './store';
// import { reducer } from './store/reducers';
import * as effectsfromStore from './store/effects/index';


import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatDialogModule,
  MatListModule,
  MatStepperModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule } from '@angular/material';

import { DialogComponent } from './components/dialog/dialog.component';
import { SteppersComponent } from './containers/steppers/steppers.component';
import { AssetsListsComponent } from './containers/assets-lists/assets-lists.component';
import { CreditialStepComponent } from './components/creditial-step/creditial-step.component';
import { HashStepComponent } from './components/hash-step/hash-step.component';
import { ConfirmStepComponent } from './components/confirm-step/confirm-step.component';

export const ROUTES: Routes = [

  {
    path: '',
    component: AssetsListsComponent,
  },

  {
    path: 'register',
    component: SteppersComponent,
  }
];

@NgModule({
    declarations: [
      AssetsListsComponent,
      DialogComponent,
      SteppersComponent,
      CreditialStepComponent,
      HashStepComponent,
      ConfirmStepComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      // BrowserAnimationsModule,
      RouterModule.forChild(ROUTES),
      // RouterModule.forRoot(ROUTES),
      StoreModule.forFeature('yourassets', reducersfromStore.reducers),
      EffectsModule.forFeature(effectsfromStore.effects),
      MatButtonModule,
      MatToolbarModule,
      MatCardModule,
      MatDialogModule,
      MatListModule,
      MatStepperModule,
      MatGridListModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule
    ],
    exports: [
      // AssetsListsComponent
    ],
    entryComponents: [DialogComponent], // Add the DialogComponent as entry component
    providers: [

    ]
  })
  export class YourAssetsModule { }
  