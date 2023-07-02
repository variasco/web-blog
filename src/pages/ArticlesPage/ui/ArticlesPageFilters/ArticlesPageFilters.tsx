import { ArticleSortField, ArticleView } from "entities/Article";
import { ArticleSortSelector } from "features/ArticleSortSelector";
import { ArticleViewSwitcher } from "features/ArticleViewSwitcher";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames as cn } from "shared/lib";
import { useAppDispatch, useDebounce } from "shared/lib/hooks";
import { SortOrder } from "shared/types";
import { Card, Input } from "shared/ui";
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { articlesPageActions } from "../../model/slice/ArticlesPageSlice";
import styles from "./ArticlesPageFilters.module.scss";

export interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const view = useSelector(getArticlesPageView) || ArticleView.TILES;
  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  const sortType = useSelector(getArticlesPageSort);
  const onChangeSortType = useCallback(
    (sortField: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(sortField));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [fetchData, dispatch]
  );

  const sortOrder = useSelector(getArticlesPageOrder);
  const onChangeOrder = useCallback(
    (order: SortOrder) => {
      dispatch(articlesPageActions.setOrder(order));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [fetchData, dispatch]
  );

  const search = useSelector(getArticlesPageSearch);
  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setSearch(search));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [debouncedFetchData, dispatch]
  );

  return (
    <div className={cn(styles.root, {}, [className])}>
      <div className={styles.buttons}>
        <ArticleSortSelector
          sortOrder={sortOrder}
          onChangeOrder={onChangeOrder}
          sortType={sortType}
          onChangeSortType={onChangeSortType}
        />
        <ArticleViewSwitcher view={view} onViewClick={onChangeView} />
      </div>
      <Card>
        <Input value={search} onChange={onChangeSearch} placeholder={t("search")} />
      </Card>
    </div>
  );
};
