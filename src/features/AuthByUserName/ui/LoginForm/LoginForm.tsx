import { FC, KeyboardEvent, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames as cn } from "shared/lib";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components";
import { useAppDispatch } from "shared/lib/hooks";
import { Button, Input, Text, ButtonTheme, TextTheme, VStack } from "shared/ui";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginLoading } from "../../model/selectors/getLoginLoading/getLoginLoading";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { loginByUserName } from "../../model/services/loginByUserName/loginByUserName";
import { loginActions, loginReducer } from "../../model/slice/LoginSlice";
import styles from "./LoginForm.module.scss";

export interface LoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = (props) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginLoading);

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

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUserName({ username, password }));
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess?.();
    }
  }, [dispatch, onSuccess, password, username]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (e.key === "Enter") {
      onLoginClick();
    }
  };

  return (
    <DynamicModuleLoader reducers={initialReducers} removeOnUnmount>
      <form action="" className={cn(styles.root, {}, [className])}>
        <VStack gap="16">
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
          {error && <Text text={error} theme={TextTheme.ERROR} />}
          <Button
            type="submit"
            disabled={isLoading}
            onClick={onLoginClick}
            onKeyDown={onKeyDown}
            theme={ButtonTheme.OUTLINE}
            className={styles.loginButton}
          >
            {t("sign-in")}
          </Button>
        </VStack>
      </form>
    </DynamicModuleLoader>
  );
};

export default LoginForm;
