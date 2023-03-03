import { screen } from "@testing-library/react";
import { StateSchema } from "app/providers/StoreProvider";
import { componentRender } from "shared/lib/tests/componentRender";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter entity", () => {
  const initialState: DeepPartial<StateSchema> = {
    counter: { value: 10 },
  };

  test("render", () => {
    componentRender(<Counter />, { initialState });
    expect(screen.getByTestId("counter-value-title")).toHaveTextContent("10");
  });

  test("render with empty state", () => {
    componentRender(<Counter />, { initialState: undefined });
    expect(screen.getByTestId("counter-value-title")).toHaveTextContent("0");
  });

  test("increment", () => {
    componentRender(<Counter />, { initialState });
    userEvent.click(screen.getByTestId("counter-increment-btn"));
    expect(screen.getByTestId("counter-value-title")).toHaveTextContent("11");
  });

  test("decrement", () => {
    componentRender(<Counter />, { initialState });
    userEvent.click(screen.getByTestId("counter-decrement-btn"));
    expect(screen.getByTestId("counter-value-title")).toHaveTextContent("9");
  });
});
