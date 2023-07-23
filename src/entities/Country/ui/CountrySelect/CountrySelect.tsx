import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib";
import { Listbox } from "shared/ui";
import { Country } from "../../model/types/Country";

export interface CountrySelectProps {
  className?: string;
  readonly?: boolean;
  value?: Country;
  onChange?: (value: Country) => void;
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Armenia, content: Country.Armenia },
];

export const CountrySelect = (props: CountrySelectProps) => {
  const { className, readonly, value, onChange } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <Listbox
      className={cn(className)}
      label={t("country")}
      defaultValue={t("specify-the-country")}
      options={options}
      selected={value}
      onChange={onChangeHandler}
      readonly={readonly}
      direction="top right"
    />
  );
};
