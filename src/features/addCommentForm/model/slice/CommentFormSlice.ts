import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CommentFormSchema } from "../types/CommentFormSchema";

const initialState: CommentFormSchema = {
  text: "",
};

export const CommentFormSlice = createSlice({
  name: "commentForm",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { actions: commentFormActions } = CommentFormSlice;
export const { reducer: commentFormReducer } = CommentFormSlice;
