import React from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about.svg";
import HomeIcon from "shared/assets/icons/home.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import ArticlesIcon from "shared/assets/icons/articles.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: "main-link",
    Icon: HomeIcon,
  },
  {
    path: RoutePath.about,
    text: "about-link",
    Icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: "profile-link",
    Icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    text: "articles-link",
    Icon: ArticlesIcon,
    authOnly: true,
  },
];
