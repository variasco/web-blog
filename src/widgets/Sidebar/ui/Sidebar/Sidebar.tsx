import { LanguageSwitcher } from "features/LanguageSwither";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { memo, useState } from "react";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui";
import { ButtonSize } from "shared/ui/Button/Button";
import { SidebarItemsList } from "../../model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import styles from "./Sidebar.module.scss";

export interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);

  function onToggle() {
    setCollapsed((prev) => !prev);
  }

  return (
    <div
      data-testid="sidebar"
      className={cn(styles.root, { [styles.collapsed]: collapsed }, [className])}
    >
      <div className={styles.menu}>
        {SidebarItemsList.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
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
});
