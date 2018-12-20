import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';
import { YourAssetsModule } from '../your-assets/your-assets.module';
import { UploadModule } from '../upload/upload.module';
import { Routes, RouterModule } from '@angular/router';

import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects, CustomSerializer } from './store/index';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../environments/environment'; // Angular CLI environment

import { AppComponent } from './containers/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { YourAssetsComponent} from '../your-assets/containers/your-assets/your-assets.component'
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
// import {UploadComponent} from '../upload/upload/upload.component'

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze]: [];

export const ROUTES: Routes = [
  { path: '',
    pathMatch: 'full',
    redirectTo: 'your-assets'
  },
  { path: 'your-assets',
    component: YourAssetsComponent
  },
  { path: 'upload',
    loadChildren: '../upload/upload.module#UploadModule'
  },
  { path: '**',
    component: NotFoundComponent,
  }   
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    YourAssetsModule,
    UploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
