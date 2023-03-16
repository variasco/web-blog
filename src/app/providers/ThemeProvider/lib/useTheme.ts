import { useContext, useEffect } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

export interface useThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;

    switch (theme) {
    case Theme.LIGHT:
      newTheme = Theme.DARK;
      break;

    case Theme.DARK:
      newTheme = Theme.ORANGE;
      break;

    case Theme.ORANGE:
      newTheme = Theme.LIGHT;
      break;

    default:
      newTheme = Theme.LIGHT;
      break;
    }

    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  useEffect(() => {
    document.body.className = theme || "";
  }, [theme]);

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
}
