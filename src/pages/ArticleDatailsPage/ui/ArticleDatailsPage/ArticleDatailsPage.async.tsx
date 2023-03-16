import { lazy } from "react";

// export const ArticleDatailsPageAsync = lazy(() => import("./AboutPage"));
export const ArticleDatailsPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(() => resolve(import("./ArticleDatailsPage")), 500);
    })
);
