import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib";
import { Button, ButtonTheme } from "shared/ui";

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
    <Button theme={ButtonTheme.CLEAR_INVERTED} className={cn("", {}, [className])} onClick={changeLanguage}>
      {t(short ? "short-language" : "language")}
    </Button>
  );
};
