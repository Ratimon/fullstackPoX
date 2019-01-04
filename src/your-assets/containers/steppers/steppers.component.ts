import { Component, OnInit, Inject , ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { Store } from '@ngrx/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

import {MatDialog} from '@angular/material';

import * as fromStore from '../../store/reducers/register.reducer';
import * as fromAction from '../../store/actions/register.action';
import * as fromServices from '../../services/index';

import { WEB3 } from '../../../app/tokens/web3';
import Web3 from 'web3';

import {  MetamaskDialogComponent } from '../../components/metamask-dialog/metamask-dialog.component';

declare let window: any;

@Component({
  selector: 'steppers',
  templateUrl: './steppers.component.html',
  styleUrls: ['./steppers.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush

})
export class SteppersComponent implements OnInit  {

  subscription: Subscription;
  creditialForm: FormGroup;
  hashForm: FormGroup;
  
 constructor(
    private _formBuilder: FormBuilder, 
    public dialog: MatDialog,
    private cdref: ChangeDetectorRef,
    private store: Store<fromStore.RegisterState>,
    private assetsService :fromServices.AssetsService,
    @Inject(WEB3) private web3: Web3
  ) { 

  }

  async ngOnInit() {
    this.subscription = this.assetsService.getFile()
      .subscribe((image) => {
        // console.log(image);
        this.store.dispatch(new fromAction.LoadStepper(image));
    });

    setTimeout(async() => {
    
      if (typeof window.ethereum !== "undefined") {

        // if ('enable' in this.web3.currentProvider) {
          await this.web3.currentProvider.enable();
        } else {
          this.openMetamaskDialog();
        }
        // this.cdref.detectChanges()
      });
  }

  public openMetamaskDialog(): void {
    let dialogRef = this.dialog.open(MetamaskDialogComponent,
       { width: '50%', height: '50%' });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.assetsService.clearFile();
  }

  onCreditialsChange(formGroup: FormGroup): void {
    this.creditialForm = formGroup;
    this.cdref.detectChanges();
  }

  onHash(formGroup: FormGroup): void {
    this.hashForm = formGroup;
    this.cdref.detectChanges();
  }


  }
