import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui";
import styles from "./Navbar.module.scss";

export interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  
  return (
    <div className={cn(styles.root, {}, [className])}>
      <div className={styles.links}>
        <AppLink className={styles.mainLink} to={"/"}>
          {t("main-link")}
        </AppLink>
        <AppLink to={"/about"}>{t("about-link")}</AppLink>
      </div>
    </div>
  );
};
