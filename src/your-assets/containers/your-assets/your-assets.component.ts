import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

// import { UploadComponent} from '../../upload/upload/upload.component';

@Component({
  selector: 'your-assets',
  templateUrl: './your-assets.component.html',
  styleUrls: ['./your-assets.component.scss']
})
export class YourAssetsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}
