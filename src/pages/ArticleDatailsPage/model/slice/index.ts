import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "../types";
import { articleDatailsCommentsReducer } from "./ArticleDatailsCommentsSlice";
import { articleDetailsPageRecommendationsReducer } from "./ArticleDetailsPageRecommendationsSlice";

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  comments: articleDatailsCommentsReducer,
  recomendations: articleDetailsPageRecommendationsReducer,
});
