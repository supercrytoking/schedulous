import React from "react";
import PlanForm from "./PlanForm";
import { PlanContext } from "~/state/plans/context";
import { planReducer, initPlan } from "~/state/plans/reducer";
import { initialPlanState } from "~/state/plans/state";
import { updatePlan, getPlan } from "~/api/plan";

interface IProps {
  id: any;
  onSubmit: () => void;
}

export default function EditPlan({ id, onSubmit }: IProps) {
  const [state, dispatch] = React.useReducer(planReducer, initialPlanState);

  React.useEffect(() => {
    dispatch(
      getPlan(id).then((plan) => {
        dispatch(initPlan(plan));
      })
    );
  }, []);

  return (
    <PlanContext.Provider value={{ state, dispatch }}>
      {!!state.plan.id && (
        <PlanForm
          newForm={false}
          apiService={(data) => updatePlan(id, data)}
          onSubmit={onSubmit}
        />
      )}
    </PlanContext.Provider>
  );
}
