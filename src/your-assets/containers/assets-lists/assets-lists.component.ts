import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {MatDialog} from '@angular/material';
import { UploadDialogComponent } from '../../components/upload-dialog/upload-dialog.component';

// import * as fromStore from '../../store/reducers';
// import * as fromStore from '../../store/index';
import * as fromStore from '../../store/reducers/register.reducer';
import * as fromAction from '../../store/actions';
// import * as fromAction from '../../store/actions/register.action';


@Component({
  selector: 'assets-lists',
  templateUrl: './assets-lists.component.html',
  styleUrls: ['./assets-lists.component.scss']
})
export class AssetsListsComponent implements OnInit {

  constructor(
    private store: Store<fromStore.RegisterState>,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
  }  

  public openUploadDialog() {
    let dialogRef = this.dialog.open(UploadDialogComponent,
       { width: '50%', height: '50%' });
    const sub = dialogRef.componentInstance.picked.subscribe((data) => {
      // console.log(data);
    });
    dialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe();
    });
  }
}
