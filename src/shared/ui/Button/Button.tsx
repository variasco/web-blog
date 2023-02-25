import { ButtonHTMLAttributes, FC } from "react";
import { classNames as cn } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
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
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme,
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
};
