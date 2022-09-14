import React from "react";
import { Link } from "react-router-dom";
import Font from "~/components/Font";
import Flex from "~/components/Flex";
import useUrlMatch from "~/hooks/useUrlMatch";

interface IProps {
  title: string;
  bubble?: string | number;
  to?: any;
  onClick?: () => void;
}

export default function SubNavLink({ title, bubble, to, onClick }: IProps) {
  let props = {
    to: to,
    onClick: onClick,
  };

  const selected = useUrlMatch(to);

  return (
    <Link {...props}>
      <Flex.Row
        pl="small"
        pr="small"
        mb="small"
        responsive={false}
        justify="space-between"
      >
        <Font
          block={true}
          size="medium"
          color={selected ? "primary" : "gray-900"}
          weight="bold"
        >
          {title}
        </Font>
        {bubble && (
          <Font color={selected ? "primary" : "gray-500"} weight="bold">
            {bubble}
          </Font>
        )}
      </Flex.Row>
    </Link>
  );
}
