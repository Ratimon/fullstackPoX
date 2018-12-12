import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { YourAssetsModule } from './your-assets/your-assets.module';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  { path: '',
    component: TopMenuComponent,
    pathMatch: 'full'
  },
  { path: '**',
    component: NotFoundComponent,
  }    
];

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    NotFoundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      routes),
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    YourAssetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
