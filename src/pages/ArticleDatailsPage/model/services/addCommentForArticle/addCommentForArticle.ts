import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticleDetailsData } from "entities/Article";
import { Comment } from "entities/Comment";
import { getUserAuthData } from "entities/User";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  "articleDetails/addCommentForArticle",
  async (text, thunkApi) => {
    const { rejectWithValue, extra, getState, dispatch } = thunkApi;

    const state = getState();
    const userData = getUserAuthData(state);
    const article = getArticleDetailsData(state);

    if (!userData && !text && !article) {
      return rejectWithValue("no data");
    }

    try {
      const response = await extra.api.post<Comment>("/comments", {
        articleId: article?.id,
        userId: userData?.id,
        text,
      });

      dispatch(fetchCommentsByArticleId(article?.id));

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue("error");
    }
  }
);
