import { useTheme } from "app/providers/ThemeProvider";
import { FC } from "react";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import { classNames as cn } from "shared/lib";
import { Button } from "shared/ui";

export interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button theme="clear" className={cn(className)} onClick={toggleTheme}>
      {theme === "app-dark-theme" ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
