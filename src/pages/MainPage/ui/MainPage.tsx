import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";
import { Page } from "shared/ui";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <h1>{t("main-page")}</h1>
      <BugButton style={{ marginTop: "12px" }} />
    </Page>
  );
};

export default AboutPage;
