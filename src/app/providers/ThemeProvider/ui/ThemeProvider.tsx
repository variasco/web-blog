import { FC, ReactNode, useMemo, useState } from "react";
import { Theme, ThemeContext } from "../lib/ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "../lib/consts";

export interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || "app-light-theme";

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children, initialTheme = defaultTheme } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const memoizedTheme = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={memoizedTheme}>{children}</ThemeContext.Provider>;
};
