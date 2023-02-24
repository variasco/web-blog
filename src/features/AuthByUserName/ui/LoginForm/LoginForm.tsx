import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { Button, Input } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import styles from "./LoginForm.module.scss";

export interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={cn(styles.root, {}, [className])}>
      <Input autofocus placeholder={t("enter-username")} type="text" />
      <Input placeholder={t("enter-password")} type="text" />
      <Button theme={ButtonTheme.OUTLINE} className={styles.loginButton}>
        {t("sign-in")}
      </Button>
    </div>
  );
};
