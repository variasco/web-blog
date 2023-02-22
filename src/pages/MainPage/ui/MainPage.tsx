import { BugButton } from "app/providers/ErrorBoundary";
import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("main-page")}</h1>
      <BugButton style={{ marginTop: "12px" }} />
      <Counter />
    </div>
  );
};

export default AboutPage;
