import { Person } from "~/models/person";

export enum PersonActionTypes {
  SetPeople,
}

export interface SetPeople {
  type: PersonActionTypes.SetPeople;
  payload: Person[];
}

export type PeopleActions = SetPeople;
