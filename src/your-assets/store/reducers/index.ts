// export * from './register.reducer';

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromRegister from './register.reducer';

export interface YourAssetsState {
  register: fromRegister.RegisterState;
}

export const reducers: ActionReducerMap<YourAssetsState> = {
  register: fromRegister.reducer,
};

export const getYourAssetsState = createFeatureSelector<YourAssetsState>(
  'yourassets'
);