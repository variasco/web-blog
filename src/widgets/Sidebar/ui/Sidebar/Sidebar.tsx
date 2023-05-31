import { LanguageSwitcher } from "features/LanguageSwither";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { classNames as cn } from "shared/lib";
import { Button, ButtonSize, ThemeButton } from "shared/ui";
import { getSidebarItems } from "../../model/selectors/getSidebarItems/getSidebarItems";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import styles from "./Sidebar.module.scss";

export interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const sidebarItems = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      )),
    [collapsed, sidebarItemsList]
  );

  function onToggle() {
    setCollapsed((prev) => !prev);
  }

  return (
    <menu
      data-testid="sidebar"
      className={cn(styles.root, { [styles.collapsed]: collapsed }, [className])}
    >
      <div className={styles.menu}>
        {sidebarItems}
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
    </menu>
  );
});
