import { Account } from '../../models/account';
import { AccountState } from './state';
import {
  AccountActions,
  AccountActionTypes,
  SetAccount,
} from './actions';

export const accountReducer = (state: AccountState, action: AccountActions): AccountState => {
  switch (action.type) {
    case AccountActionTypes.SetAccount:
      return { ...state, account: action.payload };

    default:
      return state;
  }
};

export const setCurrentAccount = (account: Account): SetAccount => ({
  type: AccountActionTypes.SetAccount,
  payload: account,
});

