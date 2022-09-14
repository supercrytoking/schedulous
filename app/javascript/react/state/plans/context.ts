import React from "react";
import {
  PlansState,
  initialPlansState,
  PlanState,
  initialPlanState,
} from "./state";
import { PlanActions } from "./actions";

export const PlansContext = React.createContext<{
  state: PlansState;
  dispatch: React.Dispatch<PlanActions>;
}>({
  state: initialPlansState,
  dispatch: () => undefined,
});

export const PlanContext = React.createContext<{
  state: PlanState;
  dispatch: React.Dispatch<PlanActions>;
}>({
  state: initialPlanState,
  dispatch: () => undefined,
});
