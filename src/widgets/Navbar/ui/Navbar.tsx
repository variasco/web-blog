import { getUserAuthData, userActions } from "entities/User";
import { LoginModal } from "features/AuthByUserName";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui";
import styles from "./Navbar.module.scss";

export interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onAuthModalClose = useCallback(() => {
    setAuthModalOpen(false);
  }, []);

  const onAuthModalOpen = () => {
    setAuthModalOpen(true);
  };

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  if (authData) {
    return (
      <div className={cn(styles.root, {}, [className])}>
        <div className={styles.links}>
          <Button onClick={onLogout} theme={ThemeButton.CLEAR_INVERTED}>
            {t("sign-out")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(styles.root, {}, [className])}>
      <div className={styles.links}>
        <Button onClick={onAuthModalOpen} theme={ThemeButton.CLEAR_INVERTED}>
          {t("sign-in")}
        </Button>
      </div>
      {authModalOpen && <LoginModal open={authModalOpen} onClose={onAuthModalClose} />}
    </div>
  );
};
