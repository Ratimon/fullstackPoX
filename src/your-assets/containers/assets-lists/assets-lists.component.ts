import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {MatDialog} from '@angular/material';
import { DialogComponent } from '../../components/dialog/dialog.component';

// import * as fromStore from '../../store/reducers';
// import * as fromStore from '../../store/index';
import * as fromStore from '../../store/reducers/upload.reducer';
import * as fromAction from '../../store/actions';
// import * as fromAction from '../../store/actions/upload.action';


@Component({
  selector: 'assets-lists',
  templateUrl: './assets-lists.component.html',
  styleUrls: ['./assets-lists.component.scss']
})
export class AssetsListsComponent implements OnInit {

  constructor(
    private store: Store<fromStore.UploadState>,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
  }  

  public openUploadDialog() {
    let dialogRef = this.dialog.open(DialogComponent, { width: '50%', height: '50%' });
    const sub = dialogRef.componentInstance.picked.subscribe((data) => {
      console.log(data);
      this.store.dispatch(new fromAction.UploadAsset(data));
    });
    dialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe();
    });
  }
}
