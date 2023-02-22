import { createSelector } from "@reduxjs/toolkit";
import { CounterSchema } from "../../types/CounterSchema";
import { getCounter } from "../getCounter/getCounter";

// export const getCounterValue = (state: StateSchema) => state.counter.value;
export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value
);
