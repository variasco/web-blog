import { ArticleDetails, ArticleList } from "entities/Article";
import { CommentList } from "entities/Comment";
import { CommentForm } from "features/addCommentForm";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components";
import { useAppDispatch, useInitialEffect } from "shared/lib/hooks";
import { Text, TextSize, VStack } from "shared/ui";
import { Page } from "widgets/Page";
import { getArticleCommentsLoading } from "../../model/selectors/getArticleComments/getArticleCommentsLoading";
import { getArticleRecommendationsLoading } from "../../model/selectors/getArticleRecommendations/getArticleRecommendations";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { articleDetailsPageReducer } from "../../model/slice";
import { getArticleComments } from "../../model/slice/ArticleDatailsCommentsSlice";
import { getArticleRecommendations } from "../../model/slice/ArticleDetailsPageRecommendationsSlice";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
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
  const { id } = useParams<{ id: string }>();

  const onSendComment = useCallback(
    (value: string) => {
      dispatch(addCommentForArticle(value));
    },
    [dispatch]
  );

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
        <VStack gap="16">
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <VStack gap="8">
            <Text size={TextSize.L} className={styles.commentsTitile} title={t("we-recommend")} />
            <ArticleList
              className={styles.recommendations}
              articles={recommendations}
              isLoading={recommendationsIsLoading}
              target="_blank"
            />
          </VStack>
          <VStack gap="8">
            <Text size={TextSize.L} title={t("comments")} />
            <CommentForm onSendComment={onSendComment} />
            <CommentList isLoading={commentsIsLoading} comments={comments} />
          </VStack>
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDatailsPage);
