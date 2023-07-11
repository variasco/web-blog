import { ArticleList, ArticleView } from "entities/Article";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames as cn } from "shared/lib";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components";
import { useAppDispatch, useInitialEffect } from "shared/lib/hooks";
import { Page } from "widgets/Page/Page";
import {
  getArticlesPageLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { articlesPageReducer, getArticles } from "../../model/slice/ArticlesPageSlice";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import styles from "./ArticlesPage.module.scss";
import { useSearchParams } from "react-router-dom";

export interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageLoading);
  const view = useSelector(getArticlesPageView) || ArticleView.TILES;
  const [searchParams] = useSearchParams();

  const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
  };

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeOnUnmount={false}>
      <Page className={cn(styles.root, {}, [className])} onScrollEnd={onLoadNextPart}>
        <ArticlesPageFilters />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
