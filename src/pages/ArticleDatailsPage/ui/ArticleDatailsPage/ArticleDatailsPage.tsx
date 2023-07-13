import { ArticleDetails, ArticleList } from "entities/Article";
import { CommentList } from "entities/Comment";
import { CommentForm } from "features/addCommentForm";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RoutePath } from "shared/config";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components";
import { useAppDispatch, useInitialEffect } from "shared/lib/hooks";
import { Button, Text, TextSize, ThemeButton } from "shared/ui";
import { Page } from "widgets/Page/Page";
import { getArticleCommentsLoading } from "../../model/selectors/getArticleCommentsLoading/getArticleCommentsLoading";
import { getArticleRecommendationsLoading } from "../../model/selectors/getArticleRecommendations/getArticleRecommendations";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { articleDetailsPageReducer } from "../../model/slice";
import { getArticleComments } from "../../model/slice/ArticleDatailsCommentsSlice";
import { getArticleRecommendations } from "../../model/slice/ArticleDetailsPageRecommendationsSlice";
import styles from "./ArticleDatailsPage.module.scss";

export interface ArticleDatailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDatailsPage = (props: ArticleDatailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsLoading);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsLoading);
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

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

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
        <div className="flex-wrapper">
          <Text size={TextSize.L} className={styles.commentsTitile} title={t("we-recommend")} />
          <ArticleList
            className={styles.recommendations}
            articles={recommendations}
            isLoading={recommendationsIsLoading}
            target="_blank"
          />
        </div>
        <Text size={TextSize.L} className={styles.commentsTitile} title={t("comments")} />
        <CommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDatailsPage);
