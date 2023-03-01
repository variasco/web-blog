import axios from "axios";
import { User, userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk";
import { loginByUserName } from "./loginByUserName";

jest.mock("axios");
const mockedAxios = jest.mocked(axios, true);

describe("loginByUserName", () => {
  test("success login", async () => {
    const userData: User = { username: "JohnDoe", id: "1" };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

    const thunk = new TestAsyncThunk(loginByUserName);
    const result = await thunk.callThunk({ username: "JohnDoe", password: "123" });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userData);
  });

  test("login with error", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUserName);
    const result = await thunk.callThunk({ username: "JohnDoe", password: "123" });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("Response is incorrect");
  });
});
