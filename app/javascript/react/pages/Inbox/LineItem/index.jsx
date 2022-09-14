import React from "react";
import Avatar from "~/components/Avatar";
import classNames from "classnames";
import styles from "./styles.module.scss";

export default function PersonLineItem({ person, selected, onClick }) {
  const classes = classNames(styles.person, {
    [styles.personSelected]: selected,
  });

  return (
    <div className={classes} onClick={() => onClick(person)}>
      <div className={styles.avatar}>
        <div className={styles.dot}></div>
        <Avatar person={person} />
      </div>
      <div className={styles.content}>
        <div className={styles.name}>{person.first_name}</div>
        <div className={styles.subtext}>
          Lorem ipsum dolor sit amet comnseca asdfa efraera a afadfasf
        </div>
      </div>
      <div className={styles.bubble}>
        <div>{person.id}</div>
      </div>
    </div>
  );
}
