import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileCard } from "entities/Profile";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components";
import { useAppDispatch, useInitialEffect } from "shared/lib/hooks";
import { Text } from "shared/ui";
import { ValidateProfileError } from "../../model/consts/consts";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { getProfileLoading } from "../../model/selectors/getProfileLoading/getProfileLoading";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { profileActions, profileReducer } from "../../model/slice/ProfileSlice";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface EditableProfileCardProps {
  id?: string;
}

export const EditableProfileCard = (props: EditableProfileCardProps) => {
  const { id } = props;

  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const data = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const loading = useSelector(getProfileLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileError.INCORRECT_AGE]: t("incorrect-age"),
    [ValidateProfileError.INCORRECT_CITY]: t("incorrect-city"),
    [ValidateProfileError.INCORRECT_COUNTRY]: t("incorrect-country"),
    [ValidateProfileError.INCORRECT_USER_DATA]: t("first-n-second-names-is-required"),
    [ValidateProfileError.NO_DATA]: t("data-not-specified"),
    [ValidateProfileError.SERVER_ERROR]: t("server-error"),
  };

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency?: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country?: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      {validateErrors?.length &&
        validateErrors?.map((err) => (
          <Text key={err} theme={"error"} text={validateErrorTranslates[err]} />
        ))}
      <ProfileCard
        data={data}
        error={error}
        loading={loading}
        readonly={readonly}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeUsername={onChangeUsername}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </DynamicModuleLoader>
  );
};
