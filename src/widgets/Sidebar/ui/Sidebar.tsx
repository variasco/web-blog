import { LanguageSwitcher } from "features/LanguageSwither";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { AppLink, Button, ThemeButton } from "shared/ui";
import { ButtonSize } from "shared/ui/Button/Button";
import styles from "./Sidebar.module.scss";
import AboutIcon from "shared/assets/icons/about.svg";
import HomeIcon from "shared/assets/icons/home.svg";

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
    <div
      data-testid="sidebar"
      className={cn(styles.root, { [styles.collapsed]: collapsed }, [className])}
    >
      <div className={styles.menu}>
        <AppLink className={styles.menuLink} to={RoutePath.main}>
          <HomeIcon className={styles.icon} />
          <span className={styles.text}>{t("main-link")}</span>
        </AppLink>
        <AppLink className={styles.menuLink} to={RoutePath.about}>
          <AboutIcon className={styles.icon} />
          <span className={styles.text}>{t("about-link")}</span>
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <LanguageSwitcher short={collapsed} className={styles.langSwitcher} />
        <ThemeSwitcher className={styles.themeSwitcher} />
      </div>
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={styles.collapseButton}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
    </div>
  );
};
