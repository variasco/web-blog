import { getUserAuthData, userActions } from "entities/User";
import { LoginModal } from "features/AuthByUserName";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RoutePath } from "shared/config";
import { classNames as cn } from "shared/lib";
import { AppLink, Button, ButtonTheme, Text, TextTheme } from "shared/ui";
import styles from "./Navbar.module.scss";

export interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onAuthModalClose = useCallback(() => {
    setAuthModalOpen(false);
  }, []);

  const onAuthModalOpen = useCallback(() => {
    setAuthModalOpen(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={cn(styles.root, {}, [className])}>
        <Text theme={TextTheme.INVERTED} title={t("app-title")} />
        <div className={styles.links}>
          <AppLink className={styles.newArticleButton} to={`${RoutePath.articles}/new`}>{t("create-article")}</AppLink>
          <Button onClick={onLogout} theme={ButtonTheme.CLEAR_INVERTED}>
            {t("sign-out")}
          </Button>
        </div>
      </header>
    );
  }

  return (
    <header className={cn(styles.root, {}, [className])}>
      <div className={styles.links}>
        <Button onClick={onAuthModalOpen} theme={ButtonTheme.CLEAR_INVERTED}>
          {t("sign-in")}
        </Button>
      </div>
      {authModalOpen && <LoginModal open={authModalOpen} onClose={onAuthModalClose} />}
    </header>
  );
});
