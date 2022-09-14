import { Plan } from "~/models/plan";

export interface PlansState {
  plans: Plan[];
}

export const initialPlansState: PlansState = {
  plans: [],
};

export interface PlanState {
  plan: Plan;
}

export const initialPlanState: PlanState = {
  plan: {
    id: null,
    name: null,
    amount: null,
    interval: 1,
    interval_type: "month",
    stripe_id: null,
    trashed: null,
  },
};
