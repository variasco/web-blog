export {
  getArticlesPageError,
  getArticlesPageHasMore,
  getArticlesPageInited,
  getArticlesPageLimit,
  getArticlesPageLoading,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from "./model/selectors/articlesPageSelectors";
export {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from "./model/slice/ArticlesPageSlice";
export type { ArticlesPageSchema } from "./model/types/ArticlesPageSchema";
export { ArticlesPageAsync as ArticlesPage } from "./ui/ArticlesPage/ArticlesPage.async";
