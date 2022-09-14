import React from "react";
import { Link } from "react-router-dom";
import Font from "~/components/Font";
import styles from "./styles.module.scss";

interface IProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  link: string;
}

export default function Setting({ title, subtitle, icon, link }: IProps) {
  return (
    <Link to={link} className={styles.setting}>
      <div className={styles.settingInner}>
        <div className={styles.settingIcon}>{icon}</div>
        <div className={styles.settingContent}>
          <Font component="h3" size="large" color="gray-900" weight="xBold">
            {title}
          </Font>
          <Font component="p" size="small" color="gray-600">
            {subtitle}
          </Font>
        </div>
      </div>
    </Link>
  );
}
