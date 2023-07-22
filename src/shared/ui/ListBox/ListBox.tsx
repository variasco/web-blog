import { Listbox as HListBox } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib";
import { BaseOption } from "../../types";
import { Button } from "../Button/Button";
import { HStack } from "../Stack/HStack/HStack";
import styles from "./ListBox.module.scss";

type DropdownDirection = "top" | "bottom";

interface ListboxProps<T> {
  options: BaseOption[];
  selected?: T;
  onChange?: (value: T) => void;
  className?: string;
  defaultValue?: string;
  label?: ReactNode;
  readonly?: boolean;
  direction?: DropdownDirection;
}

export const Listbox = <T extends BaseOption | string>(props: ListboxProps<T>) => {
  const { t } = useTranslation();
  const {
    options,
    readonly,
    label,
    className,
    selected,
    onChange,
    defaultValue = t("choose-value"),
    direction = "bottom",
  } = props;

  return (
    <HStack gap="8">
      {label && `${label} >`}
      <HListBox
        className={cn(styles.root, className, { [styles.readonly]: readonly })}
        as={"div"}
        value={selected}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button className={styles.button} as={"div"}>
          <Button theme="outline" className={cn({ [styles.readonly]: readonly })}>
            {typeof selected === "object" ? selected.content : selected ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={cn(styles.options, styles[direction])}>
          {options.map((option) => (
            <HListBox.Option
              as={Fragment}
              key={option.value}
              value={option}
              disabled={option.unavailable}
            >
              {({ active, selected, disabled }) => (
                <li
                  className={cn(styles.option, {
                    [styles.optionActive]: active,
                    [styles.optionSelected]: selected,
                    [styles.optionDisabled]: disabled,
                  })}
                >
                  {option.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
};
