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

interface TextProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  titleProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
  textProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >;
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
    titleProps,
    textProps,
    ...otherProps
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];
  const additionClasses = [className, styles[theme], styles[align], styles[size]];

  return (
    <div {...otherProps} className={cn(styles.root, additionClasses)}>
      {title && (
        <HeaderTag {...titleProps} className={styles.title}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p {...textProps} className={styles.text}>
          {text}
        </p>
      )}
    </div>
  );
});
