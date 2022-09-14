import React from "react";
import SettingsLayout from "~/layouts/SettingsLayout";
import Button from "~/components/Button";
import BreadCrumb from "~/components/BreadCrumbs";
import useAccount from "~/hooks/useAccount";
import PlanList from "./List";
import PlanModal from "./components/Modal";
import { initialPlansState } from "~/state/plans/state";
import { plansReducer, setPlans } from "~/state/plans/reducer";
import { allPlans } from "~/api/plan";

const breadCrumbData = [
  {
    title: "Plans",
    url: "",
  },
];

export default function Plans() {
  const currentAccount = useAccount();
  const [state, dispatch] = React.useReducer(plansReducer, initialPlansState);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState(null);

  React.useEffect(() => {
    if (currentAccount && currentAccount.has_stripe) {
      allPlans().then((plans) => {
        dispatch(setPlans(plans));
      });
    }
  }, [currentAccount]);

  const showEditForm = (id) => {
    setSelectedPlan(id);
    setIsOpen(true);
  };

  const showNewForm = () => {
    setSelectedPlan(null);
    setIsOpen(true);
  };

  return (
    <>
      <PlanModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        id={selectedPlan}
      />
      <SettingsLayout
        title={<BreadCrumb data={breadCrumbData}></BreadCrumb>}
        full={true}
        cta={<Button title="New Plan" style="primary" onClick={showNewForm} />}
      >
        {currentAccount.has_stripe ? (
          <PlanList plans={state.plans} onClick={showEditForm} />
        ) : (
          <div>No Stripe</div>
        )}
      </SettingsLayout>
    </>
  );
}
