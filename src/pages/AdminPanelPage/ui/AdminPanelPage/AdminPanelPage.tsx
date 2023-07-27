import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib";
import { Page } from "widgets/Page";

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return <Page className={cn(className)}>{t("admin-panel-page")}</Page>;
};

export default AdminPanelPage;
