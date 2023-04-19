import { classNames as cn } from "shared/lib";
import styles from "./Card.module.scss";
import { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Card = (props: CardProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <div className={cn(styles.root, {}, [className])} {...otherProps}>
      {children}
    </div>
  );
};
