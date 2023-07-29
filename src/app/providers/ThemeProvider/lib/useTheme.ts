import { useContext, useEffect } from "react";
import { ThemeContext, Theme } from "./ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "./consts";

export interface useThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;

    switch (theme) {
    case "app-light-theme":
      newTheme = "app-light-theme";
      break;

    case "app-dark-theme":
      newTheme = "app-dark-theme";
      break;

    case "app-orange-theme":
      newTheme = "app-orange-theme";
      break;

    default:
      newTheme = "app-light-theme";
      break;
    }

    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  useEffect(() => {
    document.body.className = theme || "";
  }, [theme]);

  return {
    theme: theme || "app-light-theme",
    toggleTheme,
  };
}
