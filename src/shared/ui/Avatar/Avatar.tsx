import { CSSProperties, memo, useMemo } from "react";
import { classNames as cn } from "shared/lib";
import styles from "./Avatar.module.scss";

export interface AvatarProps
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = memo((props: AvatarProps) => {
  const { className, src, size, alt = "", style, ...otherProps } = props;
  const customStyle = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  return (
    <img
      {...otherProps}
      className={cn(styles.root, {}, [className])}
      src={src}
      alt={alt}
      style={{ ...customStyle, ...style }}
    />
  );
});
