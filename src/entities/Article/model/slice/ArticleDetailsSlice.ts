import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";
import { Article } from "../types/Article";
import { ArticleDetailsSchema } from "../types/ArticleDetailsSchema";

const initialState: ArticleDetailsSchema = {
  isLoading: false,
};

export const ArticleDetailsSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleDetailsActions } = ArticleDetailsSlice;
export const { reducer: articleDetailsReducer } = ArticleDetailsSlice;
