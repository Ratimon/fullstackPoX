import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';

export const getRegisterState = createSelector(
    fromFeature.getYourAssetsState,
    (state: fromFeature.YourAssetsState) => state.register
  );