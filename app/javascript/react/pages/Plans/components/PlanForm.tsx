import React from "react";
import Form from "~/components/Form";
import Button from "~/components/Button";
import Font from "~/components/Font";
import Flex from "~/components/Flex";
import { PlanContext } from "~/state/plans/context";
import { Plan } from "~/models/plan";
import styles from "./styles.module.scss";

interface IProps {
  apiService: any;
  onSubmit?: () => void;
  newForm?: boolean;
}

const INTERVAL_TYPES = [
  { label: "Days", value: "day" },
  { label: "Weeks", value: "week" },
  { label: "Months", value: "month" },
  { label: "Years", value: "year" },
];

export default function PlanForm({ apiService, onSubmit, newForm }: IProps) {
  let plan: Plan;

  return (
    <PlanContext.Consumer>
      {(context) => {
        plan = context.state.plan;

        return (
          <Form
            onSubmit={onSubmit}
            service={apiService}
            formOptions={{ defaultValues: { plan: plan } }}
          >
            <Form.Input label="Name" name="plan[name]" path="name" />
            {newForm && (
              <>
                <Form.Input
                  type="number"
                  label="Price"
                  name="plan[amount]"
                  path="amount"
                />

                <div className={styles.interval}>
                  <Font block={true} size="sm" weight="bold" color="gray-500">
                    Recurring every
                  </Font>

                  <Form.Input
                    noMargin={true}
                    type="number"
                    name="plan[interval]"
                    path="interval"
                    label="Interval"
                  />

                  <Form.Select
                    noMargin={true}
                    name="plan[interval_type]"
                    label="Interval Type"
                    options={INTERVAL_TYPES}
                    path="interval_type"
                  />
                </div>
              </>
            )}
            <br />
            <Flex.Row justify="flex-end" responsive={true}>
              <Button type="submit" title="Save Plan" />
            </Flex.Row>
          </Form>
        );
      }}
    </PlanContext.Consumer>
  );
}
