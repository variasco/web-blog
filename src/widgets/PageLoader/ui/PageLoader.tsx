import { FC } from "react";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { Loader } from "shared/ui";
import styles from "./PageLoader.module.scss";

export interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(styles.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
