import React from "react";
import ReactModal from "react-modal";
import Close from "~/icons/Close";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface IProps {
  title: string;
  subtitle?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  toggle?: React.ReactNode;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "550px",
    borderRadius: "5px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

export default function Modal({
  title,
  subtitle,
  isOpen,
  onClose,
  children,
  toggle,
}: IProps) {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div
        className={classNames(styles.header, {
          [styles.headerWithToggle]: toggle,
        })}
      >
        <div className={styles.headerContent}>
          <div className={styles.title}>{title}</div>
          {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
          {toggle}
        </div>
        <div className={styles.headerClose} onClick={onClose}>
          <Close />
        </div>
      </div>
      {children}
    </ReactModal>
  );
}
