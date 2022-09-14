import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Box, { IBoxProps } from "~/components/Box";

type Padding = "xSmall" | "small" | "medium" | "large" | "xLarge";
type Align = "flex-start" | "center" | "flex-end" | "baseline";
type Justify = "flex-start" | "center" | "flex-end" | "space-between";

interface IFlex
  extends IBoxProps,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > {
  responsive: boolean;
  align?: Align;
  children: React.ReactNode | React.ReactNode[] | string;
  className?: string;
  expand?: boolean;
  grow?: number;
  justify?: Justify;
  padding?: false | Padding;
  height?: number | string;
  itemMargin?: Padding;
  maxWidth?: number | string;
  withRef?: any;
  wrap?: boolean;
}

interface IFlexWithDirection
  extends IBoxProps,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > {
  direction?: "row" | "column" | "column-reverse";
  responsive?: boolean;
  align?: Align;
  children: React.ReactNode | React.ReactNode[] | string;
  className?: string;
  expand?: boolean;
  grow?: number;
  justify?: Justify;
  padding?: false | Padding;
  height?: number | string;
  itemMargin?: Padding;
  maxWidth?: number | string;
  withRef?: any;
  wrap?: boolean;
}

function Flex({
  align = "center",
  children,
  className,
  direction = "row",
  expand = false,
  grow,
  justify = "center",
  padding = false,
  responsive = false,
  wrap = false,
  maxWidth,
  itemMargin,
  withRef,
  ...otherProps
}: IFlexWithDirection) {
  const flexStyles = {
    flexGrow: grow,
    maxWidth: maxWidth || "100%",
  };

  const flexClassName = classNames(
    styles.flex,
    styles[`flex-align-${align}`],
    styles[`flex-direction-${direction}`],
    styles[`flex-justify-${justify}`],
    styles[`${direction}-item-margin-${itemMargin}`],
    {
      [styles.expand]: expand,
      [styles.responsive]: responsive,
      [styles[`padding-${padding}`]]: padding,
      [styles.wrap]: wrap,
    },
    className
  );

  return (
    <Box
      style={flexStyles}
      className={flexClassName}
      ref={withRef}
      {...otherProps}
    >
      {children}
    </Box>
  );
}

export default {
  Inline: React.forwardRef((props: IFlexWithDirection, ref: any) => (
    <Flex
      {...props}
      withRef={ref}
      className={classNames(props.className, styles.inlineFlex)}
    />
  )),

  Column: React.forwardRef((props: IFlex, ref: any) => (
    <Flex direction="column" withRef={ref} {...props} />
  )),

  Row: React.forwardRef((props: IFlex, ref: any) => (
    <Flex direction="row" withRef={ref} {...props} />
  )),
};
