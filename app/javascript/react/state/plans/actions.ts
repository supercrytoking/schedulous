import { Plan } from "~/models/plan";

export enum PlanActionTypes {
  SetPlans,
  InitPlan,
}

export interface SetPlans {
  type: PlanActionTypes.SetPlans;
  payload: Plan[];
}

export interface InitPlan {
  type: PlanActionTypes.InitPlan;
  payload: Plan;
}

export type PlanActions = SetPlans | InitPlan;
