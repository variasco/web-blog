import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib";
import { Page } from "widgets/Page";
import styles from "./ForbiddenPage.module.scss";

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = (props: ForbiddenPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={cn(styles.root, className)}>
      <h1>{t("no-permission")}</h1>
    </Page>
  );
};

export default ForbiddenPage;
