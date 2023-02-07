import { Theme, useTheme } from "app/providers/ThemeProvider";
import { FC } from "react";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui";
import styles from "./ThemeSwitcher.module.scss";

export interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button theme={ThemeButton.CLEAR} className={cn(styles.root, {}, [className])} onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
