import React from "react";
import Avatar from "~/components/Avatar";
import Check from "~/components/Check";
import { ILineItemProps } from "~/components/Autocoplete";
import classNames from "classnames";

import styles from "./styles.module.scss";

export default function PeopleLineItem({
  result,
  onSelect,
  currentResult,
}: ILineItemProps) {
  const isSelected = currentResult && currentResult.id === result.id;
  const isNotSelected = !isSelected && currentResult;

  return (
    <div
      onClick={() => onSelect(result)}
      className={classNames(styles.item, {
        [styles.itemUnselected]: isNotSelected,
      })}
    >
      <div className={styles.avatar}>
        <Avatar.UserLetteredAvatar name={result.title} size={36} />
      </div>
      <div className={styles.itemContent}>
        <div className={styles.itemTitle}>{result.title}</div>
        {result.subtitle && (
          <div className={styles.itemSubtitle}>{result.subtitle}</div>
        )}
      </div>
      <div className={styles.itemCheck}>
        <Check selected={isSelected} size="Large" />
      </div>
    </div>
  );
}
