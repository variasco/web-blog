import { getUserAuthData } from "entities/User";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames as cn } from "shared/lib";
import { AppLink } from "shared/ui";
import { SidebarItemType } from "widgets/Sidebar/model/types/Sidebar";
import styles from "./SidebarItem.module.scss";

export interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { item, collapsed } = props;
  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) { 
    return null;
  }

  return (
    <AppLink className={cn(styles.menuLink, { [styles.collapsed]: collapsed })} to={item.path}>
      <item.Icon className={styles.icon} />
      <span className={styles.text}>{t(item.text)}</span>
    </AppLink>
  );
};
