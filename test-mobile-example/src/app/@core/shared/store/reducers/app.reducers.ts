import {ActionReducerMap} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';
import {IAppState} from '../state/app.state';
import {configReducers} from './config.reducers';
import {counterReducers} from './counter.reducers';
import {userReducer} from './users.reducers';


export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  counter: counterReducers,
  users: userReducer,
  config: configReducers,
};
