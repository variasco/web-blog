import { classNames as cn } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui";
import styles from "./Navbar.module.scss";

export interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={cn(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink className={styles.mainLink} to={"/"}>Главная</AppLink>
        <AppLink to={"/about"}>О сайте</AppLink>
      </div>
    </div>
  );
};
