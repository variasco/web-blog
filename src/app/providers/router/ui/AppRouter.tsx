import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

export default function AppRouter() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>{t("loading")}</div>}>
      <Routes>
        {Object.values(routeConfig).map((route) => (
          <Route key={route.path} path={route.path} element={(
            <div className="page-wrapper">
              {route.element}
            </div>
          )} />
        ))}
      </Routes>
    </Suspense>
  );
}
