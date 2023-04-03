import { FC, lazy } from "react";
import { CommentFormProps } from "./CommentForm";

// export const CommentFormAsync = lazy(() => import("./CommentForm"));
export const CommentFormAsync = lazy<FC<CommentFormProps>>(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!!!
      setTimeout(() => resolve(import("./CommentForm")), 500);
    })
);
