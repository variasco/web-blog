import { ButtonHTMLAttributes, FC } from "react";
import { classNames as cn } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...restProps } = props;

  return (
    <button className={cn(styles.root, {}, [className, styles[theme]])} {...restProps}>
      {children}
    </button>
  );
};
