import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib";
import { Button, VStack } from "shared/ui";
import styles from "./PageError.module.scss";

export const PageError: FC = () => {
  const { t } = useTranslation();

  function reloadPage() {
    location.reload();
  }

  return (
    <VStack align="center" justify="center" gap="16" className={cn(styles.root, {}, [])}>
      <h3 className={styles.message}>{t("something-went-wrong")}</h3>
      <Button onClick={reloadPage}>
        {t("reload-page")}
      </Button>
    </VStack>
  );
};
