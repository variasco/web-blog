import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui";
import styles from "./PageError.module.scss";

export const PageError: FC = () => {
  const { t } = useTranslation();

  function reloadPage() {
    location.reload();
  }

  return (
    <div className={cn(styles.root, {}, [])}>
      <h3 className={styles.message}>{t("something-went-wrong")}</h3>
      <Button style={{padding: "10px"}} onClick={reloadPage}>{t("reload-page")}</Button>
    </div>
  );
};
