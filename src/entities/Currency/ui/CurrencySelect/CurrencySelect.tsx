import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib";
import { Listbox } from "shared/ui";
import { Currency } from "../../model/types/Currency";

export interface CurrencySelectProps {
  className?: string;
  readonly?: boolean;
  value?: Currency;
  onChange?: (value: Currency) => void;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = (props: CurrencySelectProps) => {
  const { className, value, readonly, onChange } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <Listbox
      className={cn(className)}
      label={t("currency")}
      defaultValue={t("specify-the-currency")}
      options={options}
      selected={value}
      onChange={onChangeHandler}
      readonly={readonly}
      direction="top"
    />
  );
};
