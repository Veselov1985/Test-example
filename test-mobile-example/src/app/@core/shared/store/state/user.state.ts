import {IUser} from '../../../../shared/user.interface';

export interface IUserState {
  users: IUser[];
  selectedUser: IUser;
}


export const initialUserState: IUserState =  {
  users: [],
  selectedUser: {} as IUser
};
