import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib";
import { Page } from "widgets/Page";
import styles from "./NotFoundPage.module.scss";
import { HStack } from "shared/ui";

export interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={cn(styles.root, {}, [className])}>
      <HStack justify="center" align="center">
        {t("page-not-found")}
      </HStack>
    </Page>
  );
};
