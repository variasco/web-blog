import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";

export const fetchArticleRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  "articleDetailsRecommendations/fetchArticleRecommendations",
  async (_, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      const response = await extra.api.get<Article[]>("/articles", {
        params: {
          _limit: 4,
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
