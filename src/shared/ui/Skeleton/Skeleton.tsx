import { classNames as cn } from "shared/lib";
import styles from "./Skeleton.module.scss";

export interface SkeletonProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  borderRadius?: number | string;
  height?: number | string;
  width?: number | string;
}

export const Skeleton = (props: SkeletonProps) => {
  const { className, borderRadius, height, width, style } = props;

  const customStyle: React.CSSProperties = {
    height,
    width,
    borderRadius,
  };

  return <div className={cn(styles.root, className)} style={{ ...style, ...customStyle }}></div>;
};
