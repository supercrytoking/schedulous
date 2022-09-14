import { Account } from "../../models/account";

export enum AccountActionTypes {
  SetAccount
}

export interface SetAccount {
  type: AccountActionTypes.SetAccount;
  payload: Account;
}

export type AccountActions = SetAccount;
