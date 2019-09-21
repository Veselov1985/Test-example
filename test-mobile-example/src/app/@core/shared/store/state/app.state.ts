import {RouterReducerState} from '@ngrx/router-store';
import {initialUserState, IUserState} from './user.state';
import {IConfigState, initilaConfigState} from './config.state';
import {ICounter, initialCounterState} from './counter.state';

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  config: IConfigState;
  counter: ICounter;
}

export const initialAppState: IAppState = {
  counter: initialCounterState,
  config: initilaConfigState,
  users: initialUserState
};

export function getInitialStateApp(): IAppState {
  return initialAppState;
}
