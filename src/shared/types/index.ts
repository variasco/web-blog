import { ReactNode } from "react";

export type SortOrder = "asc" | "desc";
export interface BaseOption {
  value: string;
  content: ReactNode;
  unavailable?: boolean;
}
