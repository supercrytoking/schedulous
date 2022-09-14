import React from "react";
import { Controller } from "react-hook-form";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface IProps {
  name: string;
  label?: string;
  onChange?: (value: boolean) => void;
  className?: string;
}

export default function BtnCheckbox({
  name,
  label,
  onChange,
  className,
}: IProps) {

  const handleChange = (field) => {
    field.onChange(!field.value)
    if (onChange) {
      onChange(!field.value)
    }
  }

  return (
    <Controller
      name={name}
      render={({ field }) => {
        return (
          <div
            className={classNames(className, styles.btnCheckbox, { [styles.isChecked]: field.value })}
            {...field}
            onClick={() => handleChange(field)}
          >
            {label}
          </div>
        )
      }}
    />
  );
}
