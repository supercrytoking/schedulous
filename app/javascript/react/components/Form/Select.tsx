import React, { useRef, useEffect } from "react";
import classNames from "classnames";
import { find } from "lodash";
import styles from "./styles.module.scss";
import { capitalize, get } from "lodash";
import { useFormContext, Controller } from "react-hook-form";
import Error from "./Error";
import Font from "~/components/Font";

interface IOption {
  value: string;
  label: string;
}

interface IProps {
  type?: any;
  name: string;
  path: string;
  label?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
  className?: string;
  shouldUnregister?: boolean;
  options: IOption[];
  noMargin?: boolean;
}

export default function Select({
  name,
  label,
  onChange,
  defaultValue,
  className,
  path,
  shouldUnregister = true,
  noMargin = false,
  options = [],
}: IProps) {
  const [active, setActive] = React.useState(false);
  const [currentValue, setCurrentValue] = React.useState(defaultValue);
  const {
    formState: { errors },
    clearErrors,
  } = useFormContext();

  const handleChange = (value: string, controllerOnChange) => {
    setCurrentValue(value);

    clearErrors(path);

    if (onChange) {
      onChange(value);
    }

    if (controllerOnChange) {
      controllerOnChange(value);
    }
    setActive(false);
  };

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setActive(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const error = get(errors, path);

  const selectWrapperRef = useRef(null);
  useOutsideAlerter(selectWrapperRef);

  const findLabel = (value) => {
    const option =
      find(options, { value: value }) ||
      find(options, { value: value.toString() });
    return option.label;
  };

  return (
    <div
      className={classNames(styles.input, {
        [styles.inputNomargin]: noMargin,
        [styles.inputFilled]: currentValue && !active && !error,
        [styles.inputError]: error,
        [styles.inputFocused]: active && !error,
      })}
      ref={selectWrapperRef}
    >
      {label && (
        <Font component="label" className={styles.label}>
          {label || capitalize(name)}
        </Font>
      )}
      <span className={classNames(styles.arrow, styles.down)}></span>
      <Controller
        name={name}
        defaultValue={defaultValue}
        shouldUnregister={shouldUnregister}
        render={({ field }) => {
          setCurrentValue(field.value);

          return (
            <>
              <div
                className={classNames(
                  className,
                  styles.control,
                  styles.selectControl
                )}
                onClick={() => setActive(true)}
              >
                {
                  <span
                    style={{
                      opacity: active || field.value ? 1 : 0,
                      display: "block",
                      lineHeight: "16px",
                    }}
                  >
                    {field.value ? findLabel(field.value) : "Please select..."}
                  </span>
                }
              </div>

              {active && (
                <ul className={classNames(styles.optionsList)}>
                  {options.map((option) => {
                    return (
                      <li
                        className={classNames(styles.optionItem)}
                        onClick={() =>
                          handleChange(option.value, field.onChange)
                        }
                      >
                        {option.label}
                      </li>
                    );
                  })}
                </ul>
              )}

              {error && <Error messages={error.message} />}
            </>
          );
        }}
      />
    </div>
  );
}
