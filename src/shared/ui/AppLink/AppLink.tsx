import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames as cn } from "shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
}

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { children, to, className, theme = AppLinkTheme.PRIMARY, ...restProps } = props;

  return (
    <Link to={to} className={cn("", {}, [className, styles[theme]])} {...restProps}>
      {children}
    </Link>
  );
};
