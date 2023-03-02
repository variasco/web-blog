import { createSlice } from "@reduxjs/toolkit";
import { ProfileSchema } from "../types/Profile";

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
};

export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

export const { actions: profileActions } = ProfileSlice;
export const { reducer: profileReducer } = ProfileSlice;
