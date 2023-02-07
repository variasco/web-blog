import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui";
import styles from "./LanguageSwitcher.module.scss";

export interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
  const { className } = props;
  const { t, i18n } = useTranslation();

  function changeLanguage() {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  }

  return (
    <Button theme={ThemeButton.CLEAR} className={cn(styles.root, {}, [className])} onClick={changeLanguage}>
      {t("language")}
    </Button>
  );
};
