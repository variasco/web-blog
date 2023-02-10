import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

export default function AppRouter() {
  return (
    <Routes>
      {Object.values(routeConfig).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{route.element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}
