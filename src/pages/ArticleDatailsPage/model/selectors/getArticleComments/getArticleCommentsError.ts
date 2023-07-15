import { StateSchema } from "app/providers/StoreProvider";

export const getArticleCommentsError = (state: StateSchema) =>
  state.articleDetailsPage?.comments.error;
