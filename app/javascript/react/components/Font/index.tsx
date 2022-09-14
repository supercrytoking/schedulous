import * as React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

import Box, { IBoxProps } from "~/components/Box";
import { IColors } from "~/types";

interface IProps extends IBoxProps {
  block?: boolean;
  children: React.ReactNode;
  center?: boolean;
  strike?: boolean;
  underline?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
  color?: IColors;

  size?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "xLarge"
    | "large"
    | "medium"
    | "small"
    | "xSmall";

  weight?: "regular" | "medium" | "semiBold" | "bold" | "xBold";

  className?: string;
}

export default function Font({ ...props }: IProps) {
  const {
    block,
    center,
    strike,
    underline,
    uppercase,
    lowercase,
    capitalize,
    color,
    size,
    weight,
    children,
    className,
    ...rest
  } = props;
  const classes = classNames(
    {
      [styles.center]: center,
      [styles.strike]: strike,
      [styles.underline]: underline,
      [styles.uppercase]: uppercase,
      [styles.lowercase]: lowercase,
      [styles.capitalize]: capitalize,
      [styles[size]]: size,
      [styles[weight]]: weight,
      [styles[`color-${color}`]]: color,
    },
    className
  );

  const isBlockElement = block || center;
  const baseElement = isBlockElement ? "div" : "span";

  return (
    <Box {...rest} className={classes} component={baseElement}>
      {children}
    </Box>
  );
}
