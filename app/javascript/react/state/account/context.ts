
import React from 'react';
import { AccountState, initialAccountState } from './state';
import { AccountActions } from './actions';

export const AccountContext = React.createContext<{
  state: AccountState;
  dispatch: React.Dispatch<AccountActions>;
}>({
  state: initialAccountState,
  dispatch: () => undefined,
});