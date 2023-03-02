import { Reducer } from "@reduxjs/toolkit";
import { StoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

export interface DynamicModuleLoaderProps {
  children: ReactNode;
  reducers: ReducersList;
  removeOnUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { children, reducers, removeOnUnmount = false } = props;
  const store = useStore() as StoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([stateKey, reducer]: ReducersListEntry) => {
      store.reducerManager.add(stateKey, reducer);
      dispatch({ type: `@INIT ${stateKey} reducer` });
    });

    return () => {
      if (removeOnUnmount) {
        Object.entries(reducers).forEach(([stateKey]: ReducersListEntry) => {
          store.reducerManager.remove(stateKey);
          dispatch({ type: `@DESTROY ${stateKey} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
