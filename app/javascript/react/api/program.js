import { api } from "./paths";
import post from "./post";
import patch from "./patch";

export function getAllPrograms(query) {
  return fetch(api.programs.index(query)).then((response) => response.json())
}

export function createProgram(data) {
  return post(api.programs.create(), data);
}

export function updateProgram(id, data) {
  return patch(api.programs.update(id), data);
}

export function getProgram(id) {
  return fetch(api.programs.show(id)).then((response) => response.json())
}