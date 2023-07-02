import { memo } from "react";
import { classNames as cn } from "shared/lib";
import styles from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

export enum TextAlign {
  LEFT = "align-left",
  CENTER = "align-center",
  RIGHT = "align-right",
}

export enum TextSize {
  M = "size_m",
  L = "size_l",
}

export interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  const additionClasses = [
    className, 
    styles[theme], 
    styles[align], 
    styles[size]
  ];

  return (
    <div className={cn(styles.root, {}, additionClasses)}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
