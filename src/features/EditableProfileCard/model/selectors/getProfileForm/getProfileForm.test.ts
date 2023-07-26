import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileForm } from "./getProfileForm";

const data = {
  first: "Иван",
  lastname: "Курзенёв",
  age: 25,
  city: "Санкт-Петербург",
  country: Country.Russia,
  currency: Currency.RUB,
  username: "admin",
};

describe("getProfileForm", () => {
  test("should return filled form data", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test("with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
