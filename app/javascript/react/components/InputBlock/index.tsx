import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface IProps {
  children: React.ReactNode | React.ReactNode[] | string;
  title?: string;
  subtitle?: string;
}

export default function InputBlock({title, subtitle, children}: IProps) {
  return (
    <div className={classNames(styles.blockWrapper)}>
      <div className={classNames(styles.titleWrapper)}>
        <div className={classNames(styles.title)}>
          {title}
        </div>

        <div className={classNames(styles.subtitle)}>
          {subtitle}
        </div>
      </div>

      <div className={classNames(styles.inputWrapper)}>
        {children}
      </div>
    </div>
  );
}
