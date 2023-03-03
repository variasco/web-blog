import { lazy } from "react";

// export const ProfilePageAsync = lazy(() => import("./ProfilePage"));
export const ProfilePageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!!!
      setTimeout(() => resolve(import("./ProfilePage")), 500);
    })
);
