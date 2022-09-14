import { User } from "../../models/user";

export enum UserActionTypes {
  SetUser
}

export interface SetUser {
  type: UserActionTypes.SetUser;
  payload: User;
}

export type UserActions = SetUser;
