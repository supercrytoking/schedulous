
import React from 'react';
import { UserState, initialUserState } from './state';
import { UserActions } from './actions';

export const UserContext = React.createContext<{
  state: UserState;
  dispatch: React.Dispatch<UserActions>;
}>({
  state: initialUserState,
  dispatch: () => undefined,
});