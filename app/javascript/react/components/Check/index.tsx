import React from "react";
import classNames from "classnames";
import CheckIcon from "~/icons/toggle/CheckIcon";
import styles from "./styles.module.scss";

interface IProps {
  size?: "Small" | "Large";
  selected: boolean;
  square?: boolean;
}

export default function Check({ size = "Small", square, selected }: IProps) {
  const className = classNames(styles.check, styles[`check${size}`], {
    [styles.checkSquare]: square,
    [styles.checkSelected]: selected,
  });

  return <div className={className}>{selected && <CheckIcon />}</div>;
}
