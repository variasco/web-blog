import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { ArticleDatailsCommentsSchema } from "../types/ArticleDatailsCommentsSchema";

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);

const ArticleDatailsCommentsSlice = createSlice({
  name: "ArticleDatailsComments",
  initialState: commentsAdapter.getInitialState<ArticleDatailsCommentsSchema>({
    ids: [],
    entities: {},
    isLoading: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDatailsCommentsReducer } = ArticleDatailsCommentsSlice;
export const { actions: articleDatailsCommentsActions } = ArticleDatailsCommentsSlice;
