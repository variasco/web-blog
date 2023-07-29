import { StateSchema } from "app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { ValidateProfileError } from "../../consts/consts";

describe("getProfileValidateErrors", () => {
  test("should return validate errors", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.INCORRECT_USER_DATA,
          ValidateProfileError.INCORRECT_CITY,
        ],
      },
    };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_CITY,
    ]);
  });

  test("with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
