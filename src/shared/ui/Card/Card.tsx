import { classNames as cn } from "shared/lib";
import styles from "./Card.module.scss";
import { HTMLAttributes } from "react";

export enum CardTheme {
  DEFAULT = "default",
  OUTLINED = "outlined",
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  theme?: CardTheme;
}

export const Card = (props: CardProps) => {
  const { className, children, theme = CardTheme.DEFAULT, ...otherProps } = props;

  return (
    <div className={cn(styles.root, className, styles[theme])} {...otherProps}>
      {children}
    </div>
  );
};
