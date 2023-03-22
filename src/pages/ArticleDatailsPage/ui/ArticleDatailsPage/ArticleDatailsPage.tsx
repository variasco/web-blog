import { ArticleDetails } from "entities/Article";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { classNames as cn } from "shared/lib";
import styles from "./ArticleDatailsPage.module.scss";

export interface ArticleDatailsPageProps {
  className?: string;
}

const ArticleDatailsPage = (props: ArticleDatailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation("articles");
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={cn(styles.root, {}, [className])}>
        {t("article-not-found")}
      </div>
    );
  }

  return (
    <div className={cn(styles.root, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDatailsPage);
