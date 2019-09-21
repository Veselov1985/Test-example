import {ConfigActions, EConfigActions} from '../actions/config.actions';
import {IConfigState, initilaConfigState} from '../state/config.state';

export const configReducers = (
  state = initilaConfigState,
    action: ConfigActions
): IConfigState => {
  switch (action.type) {
    case EConfigActions.GetConfigSuccess:{
      return {
        ...state,
        config: action.payload
      };
    }
    default:
      return state;
  }
};
