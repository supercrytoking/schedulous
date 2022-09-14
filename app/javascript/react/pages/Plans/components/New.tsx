import React from "react";
import PlanForm from "../components/PlanForm";
import { PlanContext } from "~/state/plans/context";
import { planReducer } from "~/state/plans/reducer";
import { initialPlanState } from "~/state/plans/state";
import { createPlan } from "~/api/plan";

interface IProps {
  onSubmit: () => void;
}

export default function NewPlan({ onSubmit }: IProps) {
  const [state, dispatch] = React.useReducer(planReducer, initialPlanState);

  return (
    <PlanContext.Provider value={{ state, dispatch }}>
      <PlanForm newForm={true} apiService={createPlan} onSubmit={onSubmit} />
    </PlanContext.Provider>
  );
}
