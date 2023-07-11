import { getQueryParams } from "./addQueryParams";

describe("shared/url/addQueryParams", () => {
  test("test with one param", () => {
    const params = getQueryParams({ test: "value" });
    expect(params).toEqual("?test=value");
  });
  test("test with multiple param", () => {
    const params = getQueryParams({ test: "value", test2: "value2" });
    expect(params).toEqual("?test=value&test2=value2");
  });
  test("test with undefined first param", () => {
    const params = getQueryParams({ test: undefined });
    expect(params).toEqual("?");
  });
  test("test with undefined param", () => {
    const params = getQueryParams({ test: "value", test2: undefined });
    expect(params).toEqual("?test=value");
  });
});
