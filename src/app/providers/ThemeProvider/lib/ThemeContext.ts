import { createContext } from "react";

export enum Theme {
  LIGHT = "app-light-theme",
  DARK = "app-dark-theme",
  ORANGE = "app-orange-theme",
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const ThemeContext = createContext<ThemeContextProps>({});
