import { classNames as cn } from "shared/lib";
import styles from "./Skeleton.module.scss";

export interface SkeletonProps {
  className?: string;
  borderRadius?: number | string;
  height?: number | string;
  width?: number | string;
}

export const Skeleton = (props: SkeletonProps) => {
  const { className, borderRadius, height, width } = props;

  const style: React.CSSProperties = {
    height,
    width,
    borderRadius,
  };

  return <div className={cn(styles.root, {}, [className])} style={style}></div>;
};
