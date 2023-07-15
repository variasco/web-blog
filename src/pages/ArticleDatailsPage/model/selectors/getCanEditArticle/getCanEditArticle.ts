import { createSelector } from "@reduxjs/toolkit";
import { getArticleDetailsData } from "entities/Article";
import { getUserAuthData } from "entities/User";

export const getCanEditArticle = createSelector(
  getArticleDetailsData,
  getUserAuthData,
  (articleData, authData) => {
    if (!articleData || !authData) return false;
    return authData.id === articleData.user.id;
  }
);
