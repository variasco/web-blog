import { LoginModal } from "features/AuthByUserName";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui";
import styles from "./Navbar.module.scss";

export interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);

  const onAuthModalClose = useCallback(() => {
    setAuthModalOpen(false);
  }, []);

  const onAuthModalOpen = useCallback(() => {
    setAuthModalOpen(true);
  }, []);

  return (
    <div className={cn(styles.root, {}, [className])}>
      <div className={styles.links}>
        <Button onClick={onAuthModalOpen} theme={ThemeButton.CLEAR_INVERTED}>
          {t("sigh-in")}
        </Button>
      </div>
      <LoginModal open={authModalOpen} onClose={onAuthModalClose} />
    </div>
  );
};
