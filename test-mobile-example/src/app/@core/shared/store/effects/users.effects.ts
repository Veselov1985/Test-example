import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {MobileService} from '../../../../service/mobile.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../state/app.state';
import {EUserActions, GetUsers, GetUsersSuccess} from '../actions/user.actions';
import {switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {IUser} from '../../../../shared/user.interface';


@Injectable()
export class UsersEffects {
  @Effect()
  getUsers$ = this._actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    tap((r) => {console.log(r)}),
    switchMap(() => this._mobileService.getUsers()),
    switchMap((users: IUser[]) => of(new GetUsersSuccess(users)))
  );


  constructor(
    private _actions$: Actions,
    private _mobileService: MobileService,
    private _store: Store<IAppState>,
  ) {
  }
}
