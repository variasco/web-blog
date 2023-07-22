import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entities/Profile";
import { getUserAuthData } from "entities/User";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames as cn } from "shared/lib";
import { useAppDispatch } from "shared/lib/hooks";
import { Button, HStack, Text } from "shared/ui";

export interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const readonly = useSelector(getProfileReadonly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const dispatch = useAppDispatch();

  const edit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const cancel = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const save = useCallback(() => {
    dispatch(updateProfileData());
    dispatch(profileActions.setReadonly(true));
  }, [dispatch]);

  return (
    <HStack align="center" justify="between" className={cn(className)}>
      <Text title={t("profile-page")} />
      {canEdit && (
        <>
          {readonly ? (
            <Button theme="outline" onClick={edit}>
              {t("edit")}
            </Button>
          ) : (
            <HStack gap="16">
              <Button theme="outline_red" onClick={cancel}>
                {t("cancel")}
              </Button>
              <Button theme="outline" onClick={save}>
                {t("save")}
              </Button>
            </HStack>
          )}
        </>
      )}
    </HStack>
  );
};
