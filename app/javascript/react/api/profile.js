import { api } from "./paths";
import post from "./post";

export function getProfile() {
  return fetch(api.profile()).then((response) => response.json());
}
