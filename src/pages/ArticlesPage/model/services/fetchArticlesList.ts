import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  "articlesPage/fetchArticlesList",
  async (articleId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      const response = await extra.api.get<Article[]>("/articles", {
        params: {
          _expand: "user",
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message || e?.message || "Something went wrong");
    }
  }
);
