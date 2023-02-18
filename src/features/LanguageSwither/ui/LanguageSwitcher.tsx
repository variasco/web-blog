import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui";

export interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
  const { className, short = false } = props;
  const { t, i18n } = useTranslation();

  function changeLanguage() {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  }

  return (
    <Button theme={ThemeButton.CLEAR} className={cn("", {}, [className])} onClick={changeLanguage}>
      {t(short ? "short-language" : "language")}
    </Button>
  );
};
