import { getUserAuthData } from "entities/User";
import { memo, Suspense, useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

function AppRouter() {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(
    () => Object.values(routeConfig).filter((route) => (route.authOnly && !isAuth ? false : true)),
    [isAuth]
  );

  return (
    <Routes>
      {routes.map((route) => (
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

export default memo(AppRouter);
