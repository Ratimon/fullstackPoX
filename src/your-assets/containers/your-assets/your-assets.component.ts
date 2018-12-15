import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UploadAssetDialogComponent } from '../../upload-asset-dialog/upload-asset-dialog.component';

@Component({
  selector: 'your-assets',
  templateUrl: './your-assets.component.html',
  styleUrls: ['./your-assets.component.css']
})
export class YourAssetsComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit() {
  }

  upload(){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;

    this.dialog.open(UploadAssetDialogComponent, dialogConfig);
  }

}
