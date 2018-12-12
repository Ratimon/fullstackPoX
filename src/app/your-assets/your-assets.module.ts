import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { YourAssetsComponent } from './containers/your-assets/your-assets.component';
import { UploadAssetDialogComponent } from './upload-asset-dialog/upload-asset-dialog.component';

@NgModule({
    declarations: [
      YourAssetsComponent,
      UploadAssetDialogComponent
    ],
    entryComponents: [
      UploadAssetDialogComponent
    ],
    imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatToolbarModule,
      MatDialogModule
    ],
    exports: [
    YourAssetsComponent,
    ],
  })
  export class YourAssetsModule { }
  