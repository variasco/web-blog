import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "../../types/Article";

export const fetchArticleById = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
  "articleDetails/fetchArticleById",
  async (articleId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;
    try {
      if (articleId) throw new Error("articleId не было получен");

      const response = await extra.api.get<Article>(`/articles/${articleId}`, {
        params: {
          _expand: "user",
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e: any) {
      console.log(e);
      return rejectWithValue(e?.response?.data?.message || e?.message || "Something went wrong");
    }
  }
);
