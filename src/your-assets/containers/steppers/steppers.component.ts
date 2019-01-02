import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

import * as fromStore from '../../store/reducers/register.reducer';
import * as fromAction from '../../store/actions/register.action';
import * as fromServices from '../../services/index';


@Component({
  selector: 'steppers',
  templateUrl: './steppers.component.html',
  styleUrls: ['./steppers.component.scss']
})
export class SteppersComponent implements OnInit {

  subscription: Subscription;
  creditialForm: FormGroup;
  hashForm: FormGroup;
  
  constructor(
    private _formBuilder: FormBuilder, 
    private cdref: ChangeDetectorRef,
    private store: Store<fromStore.RegisterState>,
    private assetsService :fromServices.AssetsService
  ) { }

  ngOnInit() {
    this.subscription = this.assetsService.getFile()
      .subscribe((image) => {
        // console.log(image);
        this.store.dispatch(new fromAction.LoadStepper(image));

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
