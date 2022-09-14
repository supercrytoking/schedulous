import { api } from "./paths";
import post from "./post";
import patch from "./patch";

export function allPlans() {
  return fetch(api.plans.index()).then((response) => response.json());
}

export function createPlan(plan) {
  return post(api.plans.create(), plan);
}

export function getPlan(id) {
  return fetch(api.plans.show(id)).then((response) => response.json());
}

export function updatePlan(id, plan) {
  return patch(api.plans.update(id), plan);
}
