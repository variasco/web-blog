import { memo } from "react";
import { classNames as cn } from "shared/lib";
import styles from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
  ERROR = "error",
}

export enum TextAlign {
  LEFT = "align-left",
  CENTER = "align-center",
  RIGHT = "align-right",
}

export enum TextSize {
  S = "size_s",
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

type HeaderTagType = "h2" | "h3" | "h4";

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.L]: "h2",
  [TextSize.M]: "h3",
  [TextSize.S]: "h4",
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];
  const additionClasses = [className, styles[theme], styles[align], styles[size]];

  return (
    <div className={cn(styles.root, additionClasses)}>
      {title && <HeaderTag className={styles.title}>{title}</HeaderTag>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
