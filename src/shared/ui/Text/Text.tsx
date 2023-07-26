import { memo } from "react";
import { classNames as cn } from "shared/lib";
import styles from "./Text.module.scss";

type TextTheme = "primary" | "inverted" | "error";
type TextAlign = "left" | "center" | "right";
type TextSize = "size_s" | "size_m" | "size_l";
type HeaderTagType = "h2" | "h3" | "h4";

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  ["size_s"]: "h2",
  ["size_m"]: "h3",
  ["size_l"]: "h4",
};

interface TextProps {
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
    theme = "primary",
    align = "align-left",
    size = "size_m",
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
