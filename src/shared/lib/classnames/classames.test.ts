import cn from "./classnames";

describe("classnames", () => {
  test("with one first param", () => {
    const expected = "class";
    expect(cn("class")).toBe(expected);
  });

  test("with two first param", () => {
    const exptected = "class1 class2";
    expect(cn("class1 class2")).toBe(exptected);
  });

  test("with two or more string params", () => {
    const exptected = ["class1", "class2", "class3"];
    expect(cn(...exptected)).toBe(exptected.join(" "));
  });

  test("with undefined param", () => {
    const expected = ["class", undefined];
    expect(cn(...expected)).toBe("class");
  });

  test("with only additional param", () => {
    const exptected = "class1 class2";
    expect(cn("", {}, ["class1", "class2"])).toBe(exptected);
  });

  test("with only mod param", () => {
    const expected = "opened scrollable";
    expect(cn("", { opened: true, scrollable: true })).toBe(expected);
  });

  test("with only mod param with false", () => {
    const expected = "opened";
    expect(cn("", { opened: true, scrollable: false })).toBe(expected);
  });

  test("with all params", () => {
    const expected = "class opened class1 class2";
    expect(cn("class", { opened: true, scrollable: false }, ["class1", "class2"])).toBe(expected);
  });
});
