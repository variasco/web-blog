import { memo, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames as cn } from "shared/lib";
import styles from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
  RED = "red",
}

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const { children, to, className, theme = AppLinkTheme.PRIMARY, ...restProps } = props;

  return (
    <Link to={to} className={cn("", {}, [className, styles[theme]])} {...restProps}>
      {children}
    </Link>
  );
});
