import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { Button, Modal, ThemeButton } from "shared/ui";
import styles from "./Navbar.module.scss";

export interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);

  const authModalToggle = useCallback(() => {
    setAuthModalOpen((prev) => !prev);
  }, []);

  return (
    <div className={cn(styles.root, {}, [className])}>
      <div className={styles.links}>
        <Button onClick={() => setAuthModalOpen(true)} theme={ThemeButton.CLEAR_INVERTED}>
          {t("sigh-in")}
        </Button>
      </div>
      <Modal open={authModalOpen} onClose={authModalToggle}>
        {/*  */}
      </Modal>
    </div>
  );
};
