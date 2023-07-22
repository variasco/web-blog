import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";
import { VStack } from "shared/ui";
import { Page } from "widgets/Page";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <VStack gap="16" align="start">
        <h1>{t("main-page")}</h1>
        <BugButton />
      </VStack>
    </Page>
  );
};

export default AboutPage;
