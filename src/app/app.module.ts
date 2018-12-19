import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from '@angular/material/toolbar';
import { YourAssetsModule } from '../your-assets/your-assets.module';

import { AppComponent } from './containers/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { YourAssetsComponent} from '../your-assets/containers/your-assets/your-assets.component'
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';

import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '',
    component: YourAssetsComponent,
    pathMatch: 'full'
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
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      routes),
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    YourAssetsModule
  ],
  // exports : [
  //   MatSidenavModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
