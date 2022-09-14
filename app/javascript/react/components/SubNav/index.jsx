import React from "react";

import styles from "./styles.module.scss";

export default function SubNav({ children }) {
  return <div className={styles.subnav}>{children}</div>;
}
