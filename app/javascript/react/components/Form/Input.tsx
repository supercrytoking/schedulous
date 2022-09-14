import React from "react";
import { capitalize, get } from "lodash";
import CONTROLS from "./Controls";
import { useFormContext, Controller } from "react-hook-form";
import Error from "./Error";
import classNames from "classnames";
import Font from "~/components/Font";
import styles from "./styles.module.scss";

interface IProps {
  type?: any;
  name: string;
  path?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: any;
  className?: string;
  shouldUnregister?: boolean;
  noMargin?: boolean;
}

export default function Input({
  type = "text",
  name,
  label,
  onChange,
  defaultValue,
  className,
  path,
  shouldUnregister = true,
  noMargin = false,
}: IProps) {
  const [active, setActive] = React.useState(false);
  const [currentValue, setCurrentValue] = React.useState(defaultValue);

  const {
    formState: { errors },
    clearErrors,
  } = useFormContext();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    controllerOnChange
  ) => {
    setCurrentValue(e.target.value);

    clearErrors(path);

    if (onChange) {
      onChange(e);
    }

    if (controllerOnChange) {
      controllerOnChange(e);
    }
  };

  const error = get(errors, path);

  const Component = typeof type === "function" ? type : CONTROLS[type];

  return (
    <div
      className={classNames(styles.input, {
        [styles.inputNomargin]: noMargin,
        [styles.inputFilled]: currentValue && !active && !error,
        [styles.inputError]: error,
        [styles.inputFocused]: active && !error,
      })}
    >
      {label && (
        <Font component="label" className={styles.label}>
          {label || capitalize(name)}
        </Font>
      )}
      <Controller
        name={name}
        defaultValue={defaultValue}
        shouldUnregister={shouldUnregister}
        render={({ field }) => {
          setCurrentValue(field.value);

          return (
            <>
              <Component
                className={classNames(className, styles.control)}
                onFocus={() => setActive(true)}
                {...field}
                onBlur={() => setActive(false)}
                onChange={(e) => handleChange(e, field.onChange)}
              />
              {error && <Error messages={error.message} />}
            </>
          );
        }}
      />
    </div>
  );
}
