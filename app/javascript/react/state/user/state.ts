// import { Profile } from "models/profile";
import { User } from "../../models/user";

export interface UserState {
  user: User;
}

export const initialUserState: UserState = {
  user: {
    name: null,
    name_familiar: null,
    account_id: null,
    email: null,
    id: null,
    person_id: null,
    phone: null,
    created_at: null,
    updated_at: null,
  },
};
