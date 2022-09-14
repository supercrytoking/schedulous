import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export default function Toggle({ tabs, currentTab, onChange }) {
  return (
    <div className={styles.toggle}>
      {tabs.map((tab) => (
        <div
          key={tab}
          className={classNames(styles.toggleItem, {
            [styles.toggleItemSelected]: currentTab == tab,
          })}
          onClick={() => onChange(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}
