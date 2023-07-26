import { ArticleList, ArticleView } from "entities/Article";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useInitialEffect } from "shared/lib/hooks";
import {
  getArticlesPageError,
  getArticlesPageLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { getArticles } from "../../model/slice/ArticlesPageSlice";

export interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = (props: ArticleInfiniteListProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageLoading);
  const view = useSelector(getArticlesPageView) || ArticleView.TILES;
  const [searchParams] = useSearchParams();
  const error = useSelector(getArticlesPageError);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ArticleList className={className} isLoading={isLoading} view={view} articles={articles} />
  );
};
