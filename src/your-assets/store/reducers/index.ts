// export * from './upload.reducer';

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromUpload from './upload.reducer';
// import * as fromToppings from './toppings.reducer';

export interface YourAssetsState {
  upload: fromUpload.UploadState;
}

export const reducers: ActionReducerMap<YourAssetsState> = {
  upload: fromUpload.reducer,
};

// export const getProductsState = createFeatureSelector<ProductsState>(
//   'yourassets'
// );