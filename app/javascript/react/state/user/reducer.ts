import { User } from '../../models/user';
import { UserState } from './state';
import {
  UserActions,
  UserActionTypes,
  SetUser,
} from './actions';

export const userReducer = (state: UserState, action: UserActions): UserState => {
  switch (action.type) {
    case UserActionTypes.SetUser:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export const setCurrentUser = (user: User): SetUser => ({
  type: UserActionTypes.SetUser,
  payload: user,
});

