import { getArticleDetailsData } from "entities/Article";
import { getUserAuthData } from "entities/User";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config";
import { classNames as cn } from "shared/lib";
import { Button, ButtonTheme } from "shared/ui";
import { getCanEditArticle } from "../../model/selectors/getCanEditArticle/getCanEditArticle";
import styles from "./ArticleDetailsPageHeader.module.scss";

export interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
  const { className } = props;
  const navigate = useNavigate();
  const { t } = useTranslation();

  const userData = useSelector(getUserAuthData);
  const article = useSelector(getArticleDetailsData);
  const canEdit = useSelector(getCanEditArticle);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditPage = useCallback(() => {
    navigate(`${RoutePath.articles}/${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <div className={cn(styles.root, className)}>
      <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
        {t("back-to-list")}
      </Button>
      {canEdit && (
        <Button className={styles.editButton} theme={ButtonTheme.OUTLINE} onClick={onEditPage}>
          {t("edit")}
        </Button>
      )}
    </div>
  );
};
