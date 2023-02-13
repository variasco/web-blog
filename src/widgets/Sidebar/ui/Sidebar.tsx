import { LanguageSwitcher } from "features/LanguageSwither";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib/classNames/classNames";
import styles from "./Sidebar.module.scss";

export interface SidebarProps {
  // extends DetailedReactHTMLElement<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation();

  function onToggle() {
    setCollapsed((prev) => !prev);
  }

  return (
    <div data-testid="sidebar" className={cn(styles.root, {[styles.collapsed]: collapsed}, [className])}>
      <button data-testid="sidebar-toggle" onClick={onToggle}>{t("toggle")}</button>
      <div className={styles.switchers}>
        <LanguageSwitcher/>
        <ThemeSwitcher/>
      </div>
    </div>
  );
};
