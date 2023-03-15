import { ChangeEvent, memo, SelectHTMLAttributes, useMemo } from "react";
import { classNames as cn } from "shared/lib";
import styles from "./Select.module.scss";

export interface SelectOption {
  value: string;
  content: string;
}

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "value" | "onChange">;

export interface SelectProps extends HTMLSelectProps {
  className?: string;
  readonly?: boolean;
  label?: string;
  options?: Array<SelectOption>;
  value?: string;
  onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
  const { className, label, options, value, readonly, onChange } = props;

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option className={styles.option} key={opt.value} value={opt.value}>
          {opt.content}
        </option>
      )),
    [options]
  );

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      {label && <span className={styles.label}>{`${label} >`}</span>}
      <select
        disabled={readonly}
        className={cn(styles.root, {}, [className])}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
});
