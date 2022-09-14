import React from "react";
import classNames from "classnames";
import Check from "~/components/Check";
import styles from "./styles.module.scss";

export interface ICheckToggleItem {
  title: string;
  icon: React.ReactNode;
  key: string;
}

interface IProps {
  items: ICheckToggleItem[];
  onChange: (key: string) => void;
  selectedKey: string;
}

export default function CheckToggle({ items, onChange, selectedKey }: IProps) {
  return (
    <div className={styles.toggle}>
      {items.map(({ title, icon, key }) => (
        <div
          key={key}
          className={classNames(styles.item, {
            [styles.itemSelected]: key === selectedKey,
          })}
          onClick={() => onChange(key)}
        >
          <div className={styles.icon}>{icon}</div>
          <div className={styles.title}>{title}</div>
          <Check selected={key === selectedKey} />
        </div>
      ))}
    </div>
  );
}
