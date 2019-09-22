import {IAppState} from '../state/app.state';
import {ICounter} from '../state/counter.state';
import {createSelector} from '@ngrx/store';

const selectedCounter = (state: IAppState) => state.counter;

export const selectCounter = createSelector(
  selectedCounter,
  (state: ICounter) => state.counter
);
