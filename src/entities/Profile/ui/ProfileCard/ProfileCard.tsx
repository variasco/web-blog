import { Country, CountrySelect } from "entities/Country";
import { Currency, CurrencySelect } from "entities/Currency";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib";
import { Avatar, Input, Loader, Text, TextAlign, ThemeText } from "shared/ui";
import { Profile } from "../../model/types/Profile";
import styles from "./ProfileCard.module.scss";

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  loading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (value?: Currency) => void;
  onChangeCountry?: (value?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    loading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeUsername,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation("profile");

  if (loading) {
    return (
      <div className={cn(styles.root, {}, [className, styles.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn(styles.root, {}, [className, styles.error])}>
        <Text
          theme={ThemeText.ERROR}
          title={t("fetching-profile-error")}
          text={t("try-to-reload")}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={cn(styles.root, { [styles.editing]: !readonly }, [className])}>
      <div className={styles.data}>
        {data?.avatar && (
          <div className={styles.avatarWrapper}>
            <Avatar src={data?.avatar} alt="avatar" />
          </div>
        )}
        <Input
          value={data?.first}
          placeholder={t("firstname")}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder={t("lastname")}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t("username")}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          placeholder={t("age")}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          placeholder={t("city")}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <CurrencySelect value={data?.currency} readonly={readonly} onChange={onChangeCurrency} />
        <CountrySelect value={data?.country} readonly={readonly} onChange={onChangeCountry} />
        <Input
          value={data?.avatar}
          placeholder={t("avatar")}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
