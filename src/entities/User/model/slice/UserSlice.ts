import { createSlice } from "@reduxjs/toolkit";
import { UserSchema } from "../types/User";

const initialState: UserSchema = {};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const { actions: userActions } = UserSlice;
export const { reducer: userReducer } = UserSlice;
