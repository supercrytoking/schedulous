import { Person } from "~/models/person";
import { PersonActionTypes, PeopleActions, SetPeople } from "./actions";
import { PeopleState } from "./state";

export const peopleReducer = (
  state: PeopleState,
  action: PeopleActions
): PeopleState => {
  switch (action.type) {
    case PersonActionTypes.SetPeople:
      return { people: action.payload };
    default:
      return state;
  }
};

export const setPeople = (programs: Person[]): SetPeople => ({
  type: PersonActionTypes.SetPeople,
  payload: programs,
});
