import { classNames as cn } from "shared/lib";
import styles from "./Flex.module.scss";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type FlexJustify = "start" | "center" | "end" | "around" | "between" | "evenly" | "stretch";
type FlexAlign = "start" | "center" | "end" | "stretch";
type FlexDirection = "row" | "column";
type FlexGap = "4" | "8" | "16" | "32";

const justifyClasses: Record<FlexJustify, string> = {
  around: styles.justifyAround,
  between: styles.justifyBetween,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  evenly: styles.justifyEvenly,
  start: styles.justifyStart,
  stretch: styles.justifyStretch,
};

const alignClasses: Record<FlexAlign, string> = {
  center: styles.alignCenter,
  end: styles.alignEnd,
  start: styles.alignStart,
  stretch: styles.alignStretch,
};

const directionClasses: Record<FlexDirection, string> = {
  column: styles.directionColumn,
  row: styles.directionRow,
};

const gapClasses: Record<FlexGap, string> = {
  "4": styles.gap4,
  "8": styles.gap8,
  "16": styles.gap16,
  "32": styles.gap32,
};

export interface FlexProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
}

export const Flex = (props: FlexProps) => {
  const {
    children,
    justify = "start",
    align = "stretch",
    direction = "row",
    gap,
    max,
    className,
    ...otherProps
  } = props;

  const classes = [
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  return (
    <div {...otherProps} className={cn(styles.root, classes, className, { [styles.max]: max })}>
      {children}
    </div>
  );
};
