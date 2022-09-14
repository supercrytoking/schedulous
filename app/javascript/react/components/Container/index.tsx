import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: IProps) {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
}

Container.Small = function ({ children, className }: IProps) {
  return (
    <div
      className={classNames(styles.container, styles.containerSmall, className)}
    >
      {children}
    </div>
  );
};

Container.XSmall = function ({ children, className }: IProps) {
  return (
    <div
      className={classNames(
        styles.container,
        styles.containerXSmall,
        className
      )}
    >
      {children}
    </div>
  );
};
