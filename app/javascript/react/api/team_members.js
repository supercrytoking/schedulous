import { api } from "./paths";

export function getAllTeamMembers(query) {
  return fetch(api.teamMembers.index(query)).then((response) =>
    response.json()
  );
}
