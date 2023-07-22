import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";
import { Listbox, VStack } from "shared/ui";
import { Page } from "widgets/Page";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <VStack gap="16" align="start">
        <h1>{t("main-page")}</h1>
        <BugButton />
        <Listbox
        
          options={[
            { value: "1", content: "first" },
            { value: "2", content: "second" },
            { value: "3", content: "third" },
          ]}
        />
      </VStack>
    </Page>
  );
};

export default AboutPage;
