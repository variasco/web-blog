import { getUserAuthData, userActions } from "entities/User";
import { LoginModal } from "features/AuthByUserName";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RoutePath } from "shared/config";
import { classNames as cn } from "shared/lib";
import { AppLink, Button, HStack, Text, TextTheme } from "shared/ui";
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
      <header className={cn(styles.root, [className])}>
        <HStack justify="between" style={{ height: "100%" }}>
          <Text theme={TextTheme.INVERTED} title={t("app-title")} />
          <HStack gap="16">
            <AppLink className={styles.newArticleButton} to={`${RoutePath.articles}/new`}>
              {t("create-article")}
            </AppLink>
            <Button onClick={onLogout} theme="clearInverted">
              {t("sign-out")}
            </Button>
          </HStack>
        </HStack>
      </header>
    );
  }

  return (
    <header className={cn(styles.root, [className])}>
      <HStack gap="16">
        <Button onClick={onAuthModalOpen} theme="clearInverted">
          {t("sign-in")}
        </Button>
      </HStack>
      {authModalOpen && <LoginModal open={authModalOpen} onClose={onAuthModalClose} />}
    </header>
  );
});
