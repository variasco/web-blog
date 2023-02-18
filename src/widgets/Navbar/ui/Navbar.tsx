import { classNames as cn } from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";

export interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={cn(styles.root, {}, [className])}>
      {/*eslint-disable-next-line i18next/no-literal-string */}
      <div className={styles.links}>
        -
      </div>
    </div>
  );
};
