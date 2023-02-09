import { classNames } from "./classNames";

describe("classNames", () => {
  test("with one first param", () => {
    const exptected = "class";
    expect(classNames("class")).toBe(exptected);
  });

  test("with two first param", () => {
    const exptected = "class1 class2";
    expect(classNames("class1 class2")).toBe(exptected);
  });

  test("with only additional param", () => {
    const exptected = "class1 class2";
    expect(classNames("", {}, ["class1", "class2"])).toBe(exptected);
  });

  test("with only mod param", () => {
    const expected = "opened scrollable";
    expect(classNames("", {opened: true, scrollable: true})).toBe(expected);
  });

  test("with only mod param with false", () => {
    const expected = "opened";
    expect(classNames("", {opened: true, scrollable: false})).toBe(expected);
  });

  test("with all params", () => {
    const expected = "class class1 class2 opened";
    expect(classNames("class", {opened: true, scrollable: false}, ["class1", "class2"])).toBe(expected);
  });
});
