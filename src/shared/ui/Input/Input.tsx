import { InputHTMLAttributes, memo, MutableRefObject, useEffect, useRef, useState } from "react";
import { classNames as cn } from "shared/lib/classNames/classNames";
import styles from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const { className, value, onChange, type = "text", placeholder, autofocus, ...restProps } = props;
  const [focused, setFocused] = useState<boolean>(false);
  const [caretPosition, setCaretPosition] = useState<number>(0);

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
          className={styles.input}
          ref={ref}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onSelect={(e: any) => setCaretPosition(e?.target?.selectionStart || 0)}
          value={value}
          onChange={onChangeHandler}
          type={type}
          {...restProps}
        />
        {focused && <span style={{ left: `${caretPosition * 8.8}px` }} className={styles.caret} />}
      </div>
    </div>
  );
});
