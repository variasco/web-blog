import { HTMLAttributes } from "react";
import { classNames as cn } from "shared/lib";
import styles from "./Card.module.scss";

export type CardTheme = "default" | "outlined";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  theme?: CardTheme;
}

export const Card = (props: CardProps) => {
  const { className, children, theme = "default", ...otherProps } = props;

  return (
    <div className={cn(styles.root, className, styles[theme])} {...otherProps}>
      {children}
    </div>
  );
};
