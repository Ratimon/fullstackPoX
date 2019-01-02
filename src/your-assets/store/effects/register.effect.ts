import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { tap, map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';

import { LocalStorage } from '@ngx-pwa/local-storage';


import * as fromRoot from '../../../app/store';
import * as registerActions from '../actions/register.action';
import * as fromStore from '../reducers/register.reducer';


@Injectable()
export class RegisterEffects {
  constructor(
    private actions$: Actions,
    protected localStorage: LocalStorage
  ) {}

@Effect()
loadStepper$ = this.actions$
  .ofType(
    registerActions.LOAD_STEPPER
  )
  // .withLatestFrom(this.store$.select())
  // .map(([action: Action, storeState: fromStore.RegisterState]) => {
  //   this.localStorage.setItem('currentState', storeState)
  //     // .subscribe(() => {

  //     // });
  // })
  // .pipe(
  //   map(() => {
  //     return new fromRoot.Go({
  //       path: ['/assets-lists','register'],
  //     });
  //   })
  //   ,
  //   //
  // );



  .pipe(
    map(() => {
      return new fromRoot.Go({
        path: ['/assets-lists','register'],
      });
    })
  );




}