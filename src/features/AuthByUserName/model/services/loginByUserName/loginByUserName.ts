import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import { LOCAL_STORAGE_USER_KEY } from "shared/const/localstorage";

interface LoginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, ThunkConfig<string>>(
  "login/loginByUserName",
  async (authData, thunkApi) => {
    const { dispatch, rejectWithValue, extra } = thunkApi;
    try {
      const response = await extra.api.post<User>("/login", authData);

      if (!response?.data) {
        throw new Error("Request is incorrect");
      }

      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e: any) {
      console.log(e);
      return rejectWithValue(e?.response?.data?.message || e.message || "smth wnt wrng");
    }
  }
);
