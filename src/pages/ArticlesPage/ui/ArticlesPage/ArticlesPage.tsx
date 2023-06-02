import { ArticleList, ArticleView } from "entities/Article";
import { ArticleViewSwitcher } from "features/ArticleViewSwitcher";
import { fetchNextArticlesPage } from "pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components";
import { useAppDispatch, useInitialEffect } from "shared/lib/hooks";
import { Page } from "shared/ui";
import {
  getArticlesPageLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from "../../model/slice/ArticlesPageSlice";
export interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageLoading);
  const view = useSelector(getArticlesPageView) || ArticleView.TILES;

  const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
  };

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeOnUnmount={false}>
      <Page className={className} onScrollEnd={onLoadNextPart}>
        <ArticleViewSwitcher view={view} onViewClick={onChangeView} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
