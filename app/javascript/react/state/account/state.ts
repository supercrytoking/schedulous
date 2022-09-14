import { Account } from "../../models/account";

export interface AccountState {
  account: Account;
}

export const initialAccountState: AccountState = {
  account: {
    account_id: null,
    address: null,
    city: null,
    current_software: null,
    interest_stage: null,
    name: null,
    phone: null,
    state: null,
    time_zone: null,
    total_members: null,
    unit: null,
    years_in_business: null,
    zip: null
  },
};
