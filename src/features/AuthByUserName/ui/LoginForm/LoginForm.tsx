import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { Button, Input, Text, ThemeText } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUserName } from "../../model/services/loginByUserName/loginByUserName";
import { loginActions } from "../../model/slice/LoginSlice";
import styles from "./LoginForm.module.scss";

export interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={cn(styles.root, {}, [className])}>
      <Text title={t("authentication")} />
      <Input
        value={username}
        onChange={onChangeUsername}
        autofocus
        placeholder={t("enter-username")}
        type="text"
      />
      <Input
        value={password}
        onChange={onChangePassword}
        placeholder={t("enter-password")}
        type="text"
      />
      {error && <Text text={error} theme={ThemeText.ERROR} />}
      <Button
        disabled={isLoading}
        onClick={onLoginClick}
        theme={ButtonTheme.OUTLINE}
        className={styles.loginButton}
      >
        {t("sign-in")}
      </Button>
    </div>
  );
};
