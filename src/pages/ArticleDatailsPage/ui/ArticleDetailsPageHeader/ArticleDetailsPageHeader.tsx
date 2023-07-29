import { getArticleDetailsData } from "entities/Article";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config";
import { classNames as cn } from "shared/lib";
import { Button, HStack } from "shared/ui";
import { getCanEditArticle } from "../../model/selectors/getCanEditArticle/getCanEditArticle";

export interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
  const { className } = props;
  const navigate = useNavigate();
  const { t } = useTranslation();

  const article = useSelector(getArticleDetailsData);
  const canEdit = useSelector(getCanEditArticle);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditPage = useCallback(() => {
    navigate(`${RoutePath.articles}/${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <HStack align="center" justify="between" className={cn(className)}>
      <Button theme="outline" onClick={onBackToList}>
        {t("back-to-list")}
      </Button>
      {canEdit && (
        <Button theme="outline" onClick={onEditPage}>
          {t("edit")}
        </Button>
      )}
    </HStack>
  );
};
