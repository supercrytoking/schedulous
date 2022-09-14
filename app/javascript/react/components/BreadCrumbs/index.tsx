import React from "react";
import { Link } from "react-router-dom";
import Font from "~/components/Font";

import styles from "./styles.module.scss";

export default function BreadCrumb({ data }) {
  return (
    <div>
      {data.map((value, index) => (
        <Font key={index} block={false}>
          {index !== 0 && <a className={styles.textHeader}>/</a>}
          {!!value.url ? (
            <Link className={styles.textHeaderLink} to={value.url}>
              {value.title}
            </Link>
          ) : (
            <a className={styles.textHeader}>{value.title}</a>
          )}
        </Font>
      ))}
    </div>
  );
}
