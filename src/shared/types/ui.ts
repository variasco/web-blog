import { ReactNode } from "react";

export interface BaseOption {
  value: string;
  content: ReactNode;
  unavailable?: boolean;
}

export interface DropdownOption extends BaseOption {
  href?: string;
  onClick?: () => void;
  close?: () => void;
}

export type DropdownDirection = "top left" | "top right" | "bottom left" | "bottom right";
