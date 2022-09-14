import { Person } from "~/models/person";

export interface PeopleState {
  people: Person[];
}

export const initialPeopleState: PeopleState = {
  people: [],
};

export interface PersonState {
  person: Person;
}
