import { UserRole } from "entities/User";
import { AboutPage } from "pages/AboutPage";
import { AdminPanelPage } from "pages/AdminPanelPage";
import { ArticleDatailsPage } from "pages/ArticleDatailsPage";
import { ArticleEditPage } from "pages/ArticleEditPage";
import { ArticlesPage } from "pages/ArticlesPage";
import { ForbiddenPage } from "pages/ForbiddenPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";
import { AppRoutes, RoutePath } from "./AppRoutesConst";

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}/:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES_DETAILS]: {
    path: `${RoutePath.articles}/:id`,
    element: <ArticleDatailsPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES_CREATE]: {
    path: `${RoutePath.articles}/new`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES_EDIT]: {
    path: `${RoutePath.articles}/:id/edit`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: RoutePath.admin_panel,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN],
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
  [AppRoutes.FORBIDDEN]: {
    path: RoutePath.forbidden,
    element: <ForbiddenPage />,
  },
};
