import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { validateProfileData } from "./validateProfileData";
import { ValidateProfileError } from "../../consts/consts";

const data = {
  first: "Иван",
  lastname: "Курзенёв",
  age: 25,
  city: "Санкт-Петербург",
  country: Country.Russia,
  currency: Currency.RUB,
  username: "admin",
};

describe("validateProfileData", () => {
  test("success", async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test("incorrect user data", async () => {
    const result = validateProfileData({ ...data, first: "", lastname: "" });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("incorrect age", async () => {
    const result = validateProfileData({ ...data, age: NaN });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test("incorrect country", async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test("with empty form", async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.INCORRECT_CITY,
    ]);
  });
});
