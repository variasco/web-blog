import { classNames as cn } from "shared/lib";
import styles from "./Icon.module.scss";

export interface IconProps {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = (props: IconProps) => {
  const { className, Svg } = props;

  return (
    <Svg className={cn(styles.root, {}, [className])} />
  );
};
