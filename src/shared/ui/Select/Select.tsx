import { ChangeEvent, SelectHTMLAttributes, useMemo } from "react";
import { classNames as cn } from "shared/lib";
import styles from "./Select.module.scss";

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "value" | "onChange">;

export interface SelectProps<T extends string> extends HTMLSelectProps {
  className?: string;
  readonly?: boolean;
  label?: string;
  options?: Array<SelectOption<T>>;
  value?: T;
  onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
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
    onChange?.(e.target.value as T);
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
};
