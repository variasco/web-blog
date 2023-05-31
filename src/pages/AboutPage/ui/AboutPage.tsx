import { useTranslation } from "react-i18next";
import { Page } from "shared/ui";

const AboutPage = () => {
  const { t } = useTranslation();

  return <Page>{t("about-page")}</Page>;
};

export default AboutPage;
