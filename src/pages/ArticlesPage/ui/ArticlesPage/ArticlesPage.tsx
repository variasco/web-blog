import { memo } from "react";
import { classNames as cn } from "shared/lib";
import styles from "./ArticlesPage.module.scss";

export interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;

  return (
    <div className={cn(styles.root, {}, [className])}>
      {"ArticlesPage"}
    </div>
  );
};

export default memo(ArticlesPage);