import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("main-page")}</h1>
      <BugButton style={{ marginTop: "12px" }} />
    </div>
  );
};

export default AboutPage;
