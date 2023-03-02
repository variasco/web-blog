import { profileReducer } from "entities/Profile";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components";

const reducers: ReducersList = {
  profile: profileReducer,
};

export interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeOnUnmount>
      <div className={cn("", {}, [className])}>{t("profile-page")}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
