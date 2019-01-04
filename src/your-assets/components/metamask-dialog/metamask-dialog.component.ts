import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-metamask-dialog',
  templateUrl: './metamask-dialog.component.html',
  styleUrls: ['./metamask-dialog.component.scss']
})
export class MetamaskDialogComponent implements OnInit {

  // @Output() picked = new EventEmitter<any>();

  constructor(
    public dialogRef: MatDialogRef<MetamaskDialogComponent>
  ) { }

  ngOnInit() {
  }

  openWebStore(){
    window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en', '_blank')
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
