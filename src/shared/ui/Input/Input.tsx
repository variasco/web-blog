import { InputHTMLAttributes, memo, MutableRefObject, useEffect, useRef, useState } from "react";
import { classNames as cn } from "shared/lib";
import styles from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;

export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autofocus,
    readonly,
    ...restProps
  } = props;
  const [focused, setFocused] = useState<boolean>(false);
  const [caretPosition, setCaretPosition] = useState<number>(0);

  const isCaretVisible = focused && !readonly;

  const ref = useRef(null) as MutableRefObject<any>;

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  }

  useEffect(() => {
    if (autofocus) {
      setFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={cn(styles.root, {}, [className])}>
      {placeholder && <div className={styles.placeholder}>{`${placeholder} >`}</div>}
      <div className={styles.caretWrapper}>
        <input
          className={cn(styles.input, { [styles.readonly]: readonly })}
          ref={ref}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onSelect={(e: any) => setCaretPosition(e?.target?.selectionStart || 0)}
          value={value}
          onChange={onChangeHandler}
          type={type}
          readOnly={readonly}
          {...restProps}
        />
        {isCaretVisible && (
          <span style={{ left: `${caretPosition * 8.8}px` }} className={styles.caret} />
        )}
      </div>
    </div>
  );
});
