import React from "react";
import NullPlanList from "./NullPlanList";
import EditIcon from "~/icons/Edit";
import Font from "~/components/Font";
import { formatCurrency } from "~/utils/currency";

interface IProps {
  plans: any;
  onClick: (id: any) => void;
}

export default function PlanList({ plans, onClick }: IProps) {
  if (plans.length <= 0) return <NullPlanList />;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {plans.map((plan) => (
          <tr key={plan.id}>
            <td>{plan.name}</td>
            <td>
              <Font block={true} weight="bold">
                {formatCurrency(plan.amount)}
              </Font>
              <Font color="gray-700">
                {" "}
                every {plan.interval !== 1 && plan.interval}{" "}
                {plan.interval_type}
                {plan.interval !== 1 && "s"}
              </Font>
            </td>
            <td>
              <a onClick={() => onClick(plan.id)}>
                <EditIcon />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
