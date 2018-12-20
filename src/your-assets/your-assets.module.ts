import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {UploadModule} from '../upload/upload.module'

import { YourAssetsComponent } from './containers/your-assets/your-assets.component';

@NgModule({
    declarations: [
      YourAssetsComponent,
    ],
    imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatToolbarModule,
      MatDialogModule,
      UploadModule
    ],
    exports: [
    YourAssetsComponent,
    ],
  })
  export class YourAssetsModule { }
  