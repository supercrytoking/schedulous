import { api } from "./paths";
import post from "./post";

export function allPeople() {
  return fetch(api.people.index()).then((response) => response.json());
}

export function autocompletePeople(query, usersOnly = true) {
  if (usersOnly) {
    query["users"] = true;
  }

  return fetch(api.people.autocomplete(query)).then((response) =>
    response.json()
  );
}

export function getPerson(id) {
  return fetch(api.people.show(id)).then((response) => response.json());
}

export function createPerson(data) {
  return post(api.people.create(), data);
}
