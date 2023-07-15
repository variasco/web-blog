import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entities/Profile";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames as cn } from "shared/lib";
import { useAppDispatch } from "shared/lib/hooks";
import { Button, Text, ButtonTheme } from "shared/ui";
import styles from "./ProfilePageHeader.module.scss";
import { getUserAuthData } from "entities/User";

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
    <div className={cn(styles.root, {}, [className])}>
      <Text title={t("profile-page")} />
      {canEdit && (
        <div className={styles.btnWrapper}>
          {readonly ? (
            <Button className={styles.editButton} theme={ButtonTheme.OUTLINE} onClick={edit}>
              {t("edit")}
            </Button>
          ) : (
            <>
              <Button
                className={styles.editButton}
                theme={ButtonTheme.OUTLINE_RED}
                onClick={cancel}
              >
                {t("cancel")}
              </Button>
              <Button className={styles.saveButton} theme={ButtonTheme.OUTLINE} onClick={save}>
                {t("save")}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
