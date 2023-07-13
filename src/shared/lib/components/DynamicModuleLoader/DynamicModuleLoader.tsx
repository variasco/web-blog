import { Reducer } from "@reduxjs/toolkit";
import { StateSchema, StateSchemaKey, StoreWithManager } from "app/providers/StoreProvider";
import { ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

export interface DynamicModuleLoaderProps {
  children: ReactNode;
  reducers: ReducersList;
  removeOnUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { children, reducers, removeOnUnmount = true } = props;
  const store = useStore() as StoreWithManager;
  const mountedReducers = store.reducerManager.getReducerMap();
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([stateKey, reducer]) => {
      const mounted = mountedReducers[stateKey as StateSchemaKey];
      if (!mounted) {
        store.reducerManager.add(stateKey as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${stateKey} reducer` });
      }
    });

    return () => {
      if (removeOnUnmount) {
        Object.entries(reducers).forEach(([stateKey]) => {
          store.reducerManager.remove(stateKey as StateSchemaKey);
          dispatch({ type: `@DESTROY ${stateKey} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
