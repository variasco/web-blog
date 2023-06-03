import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import { CommentForm } from "features/addCommentForm";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components";
import { useAppDispatch, useInitialEffect } from "shared/lib/hooks";
import { Button, Text, ThemeButton } from "shared/ui";
import { Page } from "widgets/Page/Page";
import { getArticleCommentsLoading } from "../../model/selectors/getArticleCommentsLoading/getArticleCommentsLoading";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {
  articleDatailsCommentsReducer,
  getArticleComments,
} from "../../model/slice/ArticleDatailsCommentsSlice";
import styles from "./ArticleDatailsPage.module.scss";

export interface ArticleDatailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDatailsCommentsReducer,
};

const ArticleDatailsPage = (props: ArticleDatailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation("articles");
  const dispatch = useAppDispatch();
  const commentsIsLoading = useSelector(getArticleCommentsLoading);
  const comments = useSelector(getArticleComments.selectAll);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const onSendComment = useCallback(
    (value: string) => {
      dispatch(addCommentForArticle(value));
    },
    [dispatch]
  );

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

  if (!id) {
    return <Page className={className}>{t("article-not-found")}</Page>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeOnUnmount>
      <Page className={className}>
        <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
          {t("back-to-list")}
        </Button>
        <ArticleDetails id={id} />
        <Text className={styles.commentsTitile} title={t("comments")} />
        <CommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDatailsPage);
