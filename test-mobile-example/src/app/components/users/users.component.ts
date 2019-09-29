import {Component, OnInit, Self} from '@angular/core';
import {merge, Observable} from 'rxjs';
import {IUser} from '../../shared/user.interface';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../@core/shared/store/state/app.state';
import {GetUsers, GetUserSuccess} from '../../@core/shared/store/actions/user.actions';
import {NgOnDestroy} from '../../@core/shared/services/destroy.service';
import {selectAdmin, selectUserList} from '../../@core/shared/store/selectors/users.selector';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [NgOnDestroy],
})
export class UsersComponent implements OnInit {
  users$: Observable<IUser[]>;
  admin$: Observable<IUser>;

  constructor(
    private _store: Store<IAppState>,
    @Self() private onDestroy$: NgOnDestroy,
  ) {
    const store = merge(this._store);
    this.users$ = store.pipe(select(selectUserList));
    this.admin$ = store.pipe(select(selectAdmin));
  }

  ngOnInit() {
    this._store.dispatch(new GetUsers());
  }

  selectUser(selectedUser: IUser) {
    this._store.dispatch(new GetUserSuccess(selectedUser));
  }

}
