import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_USER_KEY } from "shared/const/localstorage";
import { User, UserSchema } from "../types/User";

const initialState: UserSchema = {};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    },
  },
});

export const { actions: userActions } = UserSlice;
export const { reducer: userReducer } = UserSlice;
