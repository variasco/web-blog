import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import { classNames as cn } from "shared/lib";
import { ThemeButton } from "..";
import styles from "./Button.module.scss";

export enum ButtonTheme {
  PRIMARY = "primary",
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  OUTLINE_RED = "outline_red",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size-m",
  L = "size-l",
  XL = "size-xl",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    children,
    className,
    theme = ButtonTheme.PRIMARY,
    square = false,
    size = ButtonSize.M,
    disabled,
    ...restProps
  } = props;

  return (
    <button
      className={cn(styles.root, { [styles.square]: square, [styles.disabled]: disabled }, [
        className,
        styles[theme],
        styles[size],
      ])}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
});
