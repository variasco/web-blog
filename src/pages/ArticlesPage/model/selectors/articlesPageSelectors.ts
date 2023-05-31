import { StateSchema } from "app/providers/StoreProvider";
import { ArticleView } from "entities/Article";

export const getArticlesPageLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view;
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore || false;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
