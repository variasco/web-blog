import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { ProfileSchema, ValidateProfileError } from "../types/EditableProfileCardSchema";
import { profileActions, profileReducer } from "./ProfileSlice";

const data = {
  first: "Иван",
  lastname: "Курзенёв",
  age: 25,
  city: "Санкт-Петербург",
  country: Country.Russia,
  currency: Currency.RUB,
  username: "admin",
};

describe("ProfileSlice", () => {
  test("test readonly", () => {
    const state: DeepPartial<ProfileSchema> = { readonly: true };

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false))).toEqual({
      readonly: false,
    });
  });

  test("test cancelEdit", () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: "" } };

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      data,
      readonly: true,
      form: data,
      validateErrors: undefined,
    });
  });

  test("test updateProfile", () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: "123" } };

    expect(
      profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: "123456" }))
    ).toEqual({
      form: { username: "123456" },
    });
  });

  test("test updateProfileData pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test("test updateProfileData fullfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ""))).toEqual({
      isLoading: false,
      data,
      form: data,
    });
  });
});
