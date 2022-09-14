import React from "react";
import classNames from "classnames";
import { ISize, IColors } from "~/types";
import styles from "./styles.module.scss";

export interface IBoxProps {
  component?: any;
  children?: React.ReactNode;
  m?: ISize;
  p?: ISize;
  mt?: ISize;
  mb?: ISize;
  ml?: ISize;
  mr?: ISize;
  mx?: ISize;
  my?: ISize;
  px?: ISize;
  py?: ISize;
  pt?: ISize;
  pb?: ISize;
  pl?: ISize;
  pr?: ISize;
  className?: string;
  backgroundColor?: IColors;
}

export default function Box({
  component: Component,
  children,
  m,
  p,
  mt,
  mb,
  ml,
  mr,
  mx,
  my,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  className,
  backgroundColor,
}: IBoxProps) {
  const ComponentWithFallback = Component || "div";

  const classes = classNames(className, {
    [styles[`m-${m}`]]: m,
    [styles[`p-${p}`]]: p,
    [styles[`mt-${mt}`]]: mt,
    [styles[`mb-${mb}`]]: mb,
    [styles[`ml-${ml}`]]: ml,
    [styles[`mr-${mr}`]]: mr,
    [styles[`mx-${mx}`]]: mx,
    [styles[`my-${my}`]]: my,
    [styles[`px-${px}`]]: px,
    [styles[`py-${py}`]]: py,
    [styles[`pt-${pt}`]]: pt,
    [styles[`pb-${pb}`]]: pb,
    [styles[`pl-${pl}`]]: pl,
    [styles[`pr-${pr}`]]: pr,
    [styles[`bg-${backgroundColor}`]]: backgroundColor,
  });

  return (
    <ComponentWithFallback className={classes}>
      {children}
    </ComponentWithFallback>
  );
}
