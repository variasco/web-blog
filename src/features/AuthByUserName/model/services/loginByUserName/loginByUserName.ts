import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import { LOCAL_STORAGE_USER_KEY } from "shared/const/localstorage";

interface LoginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<
  User,
  LoginByUserNameProps,
  { rejectValue: string }
>("login/loginByUserName", async (authData, thunkApi) => {
  try {
    const response = await axios.post<User>("http://localhost:8000/login", authData);

    if (!response?.data) {
      throw new Error("Response is incorrect");
    }

    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
    thunkApi.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkApi.rejectWithValue(e?.response?.data?.message || e.message);
  }
});
