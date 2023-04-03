import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import { CommentForm } from "features/addCommentForm";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components";
import { useAppDispatch, useInitialEffect } from "shared/lib/hooks";
import { Text } from "shared/ui";
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

  const { id } = useParams<{ id: string }>();

  const onSendComment = useCallback((value: string) => {
    dispatch(addCommentForArticle(value));
  }, [dispatch]);

  useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

  if (!id) {
    return <div className={className}>{t("article-not-found")}</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeOnUnmount>
      <div className={className}>
        <ArticleDetails id={id} />
        <Text className={styles.commentsTitile} title={t("comments")} />
        <CommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDatailsPage);
