import { memo } from "react";
import { classNames as cn } from "shared/lib";
import styles from "./ArticleDatailsPage.module.scss";

export interface ArticleDatailsPageProps {
  className?: string;
}

const ArticleDatailsPage = (props: ArticleDatailsPageProps) => {
  const { className } = props;

  return (
    <div className={cn(styles.root, {}, [className])}>
      {"ArticleDatailsPage"}
    </div>
  );
};

export default memo(ArticleDatailsPage);