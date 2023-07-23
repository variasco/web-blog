import { Menu } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { classNames as cn } from "shared/lib";
import { DropdownDirection, DropdownOption } from "../../types";
import styles from "./Dropdown.module.scss";
import { AppLink } from "../AppLink/AppLink";

interface DropDownProps {
  options: DropdownOption[];
  element: ReactNode;
  className?: string;
  direction?: DropdownDirection;
}

const mapDirectionToClass: Record<DropdownDirection, string> = {
  ["bottom left"]: styles.bottomLeft,
  ["bottom right"]: styles.bottomRight,
  ["top left"]: styles.topLeft,
  ["top right"]: styles.topRight,
};

export const Dropdown = (props: DropDownProps) => {
  const { options, className, element, direction = "bottom right" } = props;
  return (
    <Menu className={cn(styles.root, className)} as={"div"}>
      <Menu.Button as={"div"} className={styles.button}>
        {element}
      </Menu.Button>
      <Menu.Items className={cn(styles.menuList, mapDirectionToClass[direction])}>
        {options.map((option) => (
          <Menu.Item as={Fragment} key={option.value} disabled={option.unavailable}>
            {({ active, disabled, close }) => (
              <li
                className={cn({
                  [styles.menuItemActive]: active,
                  [styles.menuItemDisabled]: disabled,
                })}
              >
                {option.href ? (
                  <AppLink
                    className={cn(styles.menuItemButton)}
                    onClick={close}
                    theme="inverted"
                    to={option.href}
                  >
                    {option.content}
                  </AppLink>
                ) : (
                  <button
                    type="button"
                    onClick={option.onClick}
                    className={cn(styles.menuItemButton)}
                    disabled={disabled}
                  >
                    {option.content}
                  </button>
                )}
              </li>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
