import { StateSchema } from "app/providers/StoreProvider";

export const getArticleRecommendationsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.recomendations.isLoading;

export const getArticleRecommendationsError = (state: StateSchema) =>
  state.articleDetailsPage?.recomendations.error;
