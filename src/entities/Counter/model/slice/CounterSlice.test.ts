import { CounterSchema } from "../types/CounterSchema";
import { counterActions, counterReducer } from "./CounterSlice";

describe("CounterSlice", () => {
  const state: CounterSchema = {
    value: 10,
  };

  test("decrement action", () => {
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });

  test("increment action", () => {
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });

  test("with empty state", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
