import {CounterActions, ECounter} from '../actions/counter.actions';
import {ICounter, initialCounterState} from '../state/counter.state';

export const counterReducers = (
  state = initialCounterState,
  action: CounterActions
): ICounter => {
  switch (action.type) {
    case ECounter.Increment: {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case ECounter.Decrement : {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    case ECounter.Reset: {
      return {
        ...state,
        counter: 0
      };
    }
    default:
      return state;
  }
};
