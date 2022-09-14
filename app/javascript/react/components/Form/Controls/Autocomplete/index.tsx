import React, { useEffect } from "react";
import Font from "~/components/Font";
import classNames from "classnames";
import styles from "./styles.module.scss";

const MIN_LENGTH = 1;

interface IProps {
  label?: string;
  className?: string;
  data?: any[];
  service?: any;
  lineItem?: any;
  onChange?: (value: any) => void;
  onSelect?: (value: any) => void;
}

export interface IResult {
  id: number | string;
  title?: string;
  subtitle?: string;
  image?: React.ReactNode;
}

export default function Autocomplete({
  label,
  className,
  data,
  service,
  onChange,
  onSelect,
  lineItem,
}: IProps) {
  const Component = lineItem ? lineItem : DefaultLineItem;
  const [results, setResults] = React.useState<IResult[]>([]);
  const [currentValue, setCurrentValue] = React.useState("");
  const [active, setActive] = React.useState(false);
  const [currentResult, setCurrentResult] = React.useState<IResult | null>(
    null
  );

  useEffect(() => {
    if (data) {
      setResults(data);
    }
  }, []);

  const clearResults = () => {
    setResults([]);
    setCurrentResult(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCurrentValue(e.target.value);

    if (value === "") {
      clearResults();
      return;
    }

    if (service) {
      if (value.length >= 1) {
        service({ q: value }).then((serverResults) => {
          setResults(serverResults);
        });
      }
    } else if (data) {
      setResults(data.filter((item) => item.title.includes(value)));
    }

    if (onChange) {
      onChange(e);
    }
  };

  const handleSelect = (newResult: IResult) => {
    setCurrentResult(newResult);

    if (onSelect) {
      onSelect(newResult);
    }
  };

  return (
    <div
      className={classNames(styles.input, {
        [styles.inputFilled]: currentValue && !active,
        [styles.inputFocused]: active,
      })}
    >
      {label && (
        <Font component="label" className={styles.label}>
          {label}
        </Font>
      )}
      <input
        className={classNames(className, styles.control)}
        onChange={handleChange}
        type="text"
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
      <div>
        {results.map((result) => (
          <Component
            key={result.id}
            result={result}
            currentResult={currentResult}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
}

export interface ILineItemProps {
  result: IResult;
  currentResult?: IResult;
  onSelect: (value: any) => void;
}

const DefaultLineItem = ({ result, onSelect }: ILineItemProps) => {
  return (
    <div onClick={() => onSelect(result)} className={styles.item}>
      <div className={styles.itemContent}>
        <div className={styles.itemTitle}>{result.title}</div>
        {result.subtitle && (
          <div className={styles.itemSubtitle}>{result.subtitle}</div>
        )}
      </div>
    </div>
  );
};
