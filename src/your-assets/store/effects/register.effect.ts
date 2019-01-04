import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { tap, map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';


import { LocalStorage } from '@ngx-pwa/local-storage';


import * as fromRoot from '../../../app/store';
import * as fromStore from '../reducers/register.reducer';
import * as fromServices from '../../services/index';
import * as registerActions from '../actions/register.action';


@Injectable()
export class RegisterEffects {
  constructor(
    private actions$: Actions,
    private accountsService: fromServices.AccountsService,
    protected localStorage: LocalStorage
  ) {}

@Effect()
loadStepper$ = this.actions$
  .ofType(
    registerActions.LOAD_STEPPER
  )
  .pipe(
    switchMap(()=>{
      return this.accountsService
      .currentAccount()
      .pipe(
        map(account => new registerActions.LoadStepperSuccess(account),
        catchError(error => of(new registerActions.LoadStepperSuccess(error)))
      )
    )}
  ));
}
