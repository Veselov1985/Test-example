import {Action} from '@ngrx/store';

import {ICounter} from '../state/counter.state';

export enum ECounter {
  Decrement = '[Counter] Decrement Counter',
  Increment = '[Counter] Increment Counter',
  Reset = '[Counter] Reset'
}
export class DecrementCounter implements Action {
  public readonly type = ECounter.Decrement;
}
export class IncrementCounter implements Action {
  public readonly type = ECounter.Increment;
}
export class ResetCounter implements Action {
  public readonly type = ECounter.Reset;
}

export type CounterActions = DecrementCounter | IncrementCounter | ResetCounter;
