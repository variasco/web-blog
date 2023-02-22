import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slices/CounterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);
  const { t } = useTranslation();

  function increment() {
    dispatch(counterActions.increment());
  }

  function decrement() {
    dispatch(counterActions.decrement());
  }

  return (
    <div>
      <h1 data-testid="counter-value-title">{value}</h1>
      <Button data-testid="counter-increment-btn" onClick={increment}>
        {t("increment")}
      </Button>
      <Button data-testid="counter-decrement-btn" onClick={decrement}>
        {t("decrement")}
      </Button>
    </div>
  );
};
