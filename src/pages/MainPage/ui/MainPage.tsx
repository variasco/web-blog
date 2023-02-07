import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  return <div>{t("main-page")}</div>;
};

export default AboutPage;
