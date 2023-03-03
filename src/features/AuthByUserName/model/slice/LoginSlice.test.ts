import { LoginSchema } from "../types/LoginSchema";
import { loginActions, loginReducer } from "./LoginSlice";

describe("LoginSlice", () => {
  test("test setUsername", () => {
    const state: DeepPartial<LoginSchema> = { username: "" };

    expect(loginReducer(state as LoginSchema, loginActions.setUsername("JohnDoe")))
      .toEqual({ username: "JohnDoe" });
  });

  test("test setPassword", () => {
    const state: DeepPartial<LoginSchema> = { password: "" };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword("123")))
      .toEqual({ password: "123" });
  });
});
