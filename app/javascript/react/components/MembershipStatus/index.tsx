import React from "react";
import Font from "~/components/Font";
import Flex from "~/components/Flex";
import Box from "~/components/Box";
import { IColors } from "~/types";
import styles from "./styles.module.scss";

interface IProps {
  status: "Member" | "Churned" | "Lead" | "Expiring";
}

export default function MembershipSatus({ status }: IProps) {
  let color: IColors = "success";

  switch (status) {
    case "Member":
      color = "success";
      break;
    case "Churned":
      color = "warning";
      break;
    case "Lead":
      color = "purple";
      break;
    case "Expiring":
      color = "amber";
      break;
  }

  return (
    <Flex.Row responsive={false} justify="center">
      <Box backgroundColor={color} className={styles.circle} />
      <Font size="medium" weight="bold" color={color}>
        {status}
      </Font>
    </Flex.Row>
  );
}
