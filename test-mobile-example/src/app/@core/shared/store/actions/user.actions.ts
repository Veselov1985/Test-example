import {Action} from '@ngrx/store';
import {IUser} from '../../../../shared/user.interface';


export enum EUserActions {
  GetUsers = '[USER] Get Users',
  GetUsersSuccess = '[USER] Get User Success',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success'
};

export  class GetUsers implements Action {
  public  readonly type = EUserActions.GetUsers;
}

export  class GetUsersSuccess implements Action {
  public  readonly  type = EUserActions.GetUsersSuccess;
  constructor(public payload: IUser[]) {}
}

export  class GetUser implements Action {
  public  readonly  type = EUserActions.GetUser;
  constructor(public payload: number) {}
}
export  class GetUserSuccess implements Action {
  public  readonly  type = EUserActions.GetUserSuccess;
  constructor(public payload: IUser) {}
}

export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess;


