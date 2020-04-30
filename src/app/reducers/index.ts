import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCounter from './counter.reducer';
import { counterFeatureKey } from './counter.reducer';

export interface State {

  [fromCounter.counterFeatureKey]: fromCounter.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromCounter.counterFeatureKey]: fromCounter.reducer,
};

export const selectFeature = (state: State) => state[counterFeatureKey];

export const selectValueA = createSelector(
  selectFeature, (state: fromCounter.State) => state.countA
);

export const selectValueB = createSelector(
  selectFeature, (state: fromCounter.State) => state.countB
);

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
