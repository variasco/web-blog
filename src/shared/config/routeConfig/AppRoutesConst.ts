export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ARTICLES = "articles",
  ARTICLES_DETAILS = "articles_details",
  ARTICLES_CREATE = "articles_create",
  ARTICLES_EDIT = "articles_edit",
  ADMIN_PANEL = "admin_panel",
  NOT_FOUND = "not_found",
  FORBIDDEN = "forbidden",
}

export const RoutePath = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.ARTICLES]: "/articles",
  [AppRoutes.ARTICLES_DETAILS]: "/articles",
  [AppRoutes.ARTICLES_CREATE]: "/articles",
  [AppRoutes.ARTICLES_EDIT]: "/articles",
  [AppRoutes.ADMIN_PANEL]: "/admin",
  [AppRoutes.FORBIDDEN]: "/forbidden",
  [AppRoutes.NOT_FOUND]: "*",
};
