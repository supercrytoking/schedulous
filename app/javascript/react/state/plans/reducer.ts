import { Plan } from "~/models/plan";
import { PlanState, PlansState } from "./state";
import { PlanActions, PlanActionTypes, SetPlans } from "./actions";

export const plansReducer = (
  state: PlansState,
  action: PlanActions
): PlansState => {
  switch (action.type) {
    case PlanActionTypes.SetPlans:
      return { plans: action.payload };
    default:
      return state;
  }
};

export const planReducer = (
  state: PlanState,
  action: PlanActions
): PlanState => {
  switch (action.type) {
    case PlanActionTypes.InitPlan:
      return { plan: action.payload };
    default:
      return state;
  }
};

export const setPlans = (plans: Plan[]): SetPlans => ({
  type: PlanActionTypes.SetPlans,
  payload: plans,
});

export const initPlan = (plan: Plan): PlanActions => ({
  type: PlanActionTypes.InitPlan,
  payload: plan,
});
