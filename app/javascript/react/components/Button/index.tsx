import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

interface IProps {
  title: string;
  disabledTitle?: string;
  disabled?: boolean;
  onClick?: () => void;
  style?: "primary" | "secondary" | "tertiary" | "black";
  size?: "small" | "medium";
  className?: string;
  block?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  title,
  onClick,
  style = "primary",
  size = "medium",
  className,
  disabled = false,
  disabledTitle = "",
  block = false,
  type = "button",
}: IProps) {
  const classes = classNames(
    styles.button,
    {
      [styles.buttonPrimary]: style === "primary",
      [styles.buttonSecondary]: style === "secondary",
      [styles.buttonTertiary]: style === "tertiary",
      [styles.buttonBlack]: style === "black",
      [styles.buttonSmall]: size === "small",
      [styles.buttonMedium]: size === "medium",
      [styles.buttonBlock]: block,
    },
    className
  );

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={classes}
    >
      {disabled && disabledTitle ? disabledTitle : title}
    </button>
  );
}
