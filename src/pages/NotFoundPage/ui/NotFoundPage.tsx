import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib/classNames/classNames";
import styles from "./NotFoundPage.module.scss";
import { Page } from "shared/ui";

export interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return <Page className={cn(styles.root, {}, [className])}>{t("page-not-found")}</Page>;
};
