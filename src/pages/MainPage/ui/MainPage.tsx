import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";
import { DropdownOption } from "shared/types";
import { Button, Dropdown, Listbox, VStack } from "shared/ui";
import { Page } from "widgets/Page";

const AboutPage = () => {
  const { t } = useTranslation();

  const options = [
    { value: "1", content: "first" },
    { value: "2", content: "second" },
    { value: "3", content: "third" },
  ];

  const options2: DropdownOption[] = [
    {
      value: "1",
      content: "first",
    },
    {
      value: "2",
      content: "second",
    },
    {
      value: "3",
      content: "third",
    },
  ];

  return (
    <Page>
      <VStack gap="16" align="start">
        <h1>{t("main-page")}</h1>
        <BugButton />
        <Listbox options={options} />
        <Dropdown options={options2} element={<Button theme="outline">{"Menu"}</Button>} />
      </VStack>
    </Page>
  );
};

export default AboutPage;
