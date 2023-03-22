import { CSSProperties, memo, useMemo } from "react";
import { classNames as cn } from "shared/lib";
import styles from "./Avatar.module.scss";

export interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = memo((props: AvatarProps) => {
  const { className, src, size, alt = "" } = props;
  const style = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  return <img className={cn(styles.root, {}, [className])} src={src} alt={alt} style={style} />;
});
