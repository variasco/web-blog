import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { validateProfileData } from "../validateProfileData/validateProfileData";
import { ValidateProfileError } from "../../types/EditableProfileCardSchema";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { Profile } from "entities/Profile";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>("profile/updateProfileData", async (_, thunkApi) => {
  const { rejectWithValue, extra, getState } = thunkApi;

  const data = getProfileForm(getState());

  const errors = validateProfileData(data);

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.put<Profile>(`/profile/${data?.id}`, data);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
