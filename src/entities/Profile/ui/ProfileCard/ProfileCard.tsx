import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { getProfileLoading } from "entities/Profile/model/selectors/getProfileLoading/getProfileLoading";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames as cn } from "shared/lib";
import styles from "./ProfileCard.module.scss";
import { Button, Input, Text, ThemeButton } from "shared/ui";

export interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className } = props;
  const { t } = useTranslation("profile");
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const loading = useSelector(getProfileLoading);

  return (
    <div className={cn(styles.root, {}, [className])}>
      <div className={styles.header}>
        <Text title={t("profile-page")} />
        <Button className={styles.editButton} theme={ThemeButton.OUTLINE}>{t("edit")}</Button>
      </div>
      <div className={styles.data}>
        <Input value={data?.first} placeholder={t("firstname")} />
        <Input value={data?.lastname} placeholder={t("lastname")} />
      </div>
    </div>
  );
};
