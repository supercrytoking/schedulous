import React from "react";
import Nav from "~/components/Nav";
import SubNav from "~/components/SubNav";
import Font from "~/components/Font";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface IProps {
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  subnav?: React.ReactNode;
  cta?: React.ReactNode;
  className?: React.ReactNode;
}

export default function Admin({
  title,
  children,
  subnav,
  cta,
  className,
}: IProps) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className={styles.admin}>
      <Nav />
      {subnav && <SubNav>{subnav}</SubNav>}
      <div
        className={classNames(styles.content, {
          [styles.contentCollapsed]: collapsed || !subnav,
        })}
      >
        <div className={styles.headerContainer}>
          {subnav && (
            <button
              className={classNames(styles.collapse, {
                [styles.collapseLeft]: collapsed,
              })}
              onClickCapture={() => setCollapsed(!collapsed)}
            >
              Collapse
            </button>
          )}
          {title && (
            <div className={className || styles.header}>
              <Font component="h2" size="h6" weight="xBold">
                {title}
              </Font>
              {cta && <>{cta}</>}
            </div>
          )}
        </div>
        <div className={styles.center}>{children}</div>
      </div>
    </div>
  );
}
