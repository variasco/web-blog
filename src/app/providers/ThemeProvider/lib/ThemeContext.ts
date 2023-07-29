import { createContext } from "react";

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export type Theme = "app-light-theme" | "app-dark-theme" | "app-orange-theme";

export const ThemeContext = createContext<ThemeContextProps>({});
