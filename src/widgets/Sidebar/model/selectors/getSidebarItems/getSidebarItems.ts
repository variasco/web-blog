import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import AboutIcon from "shared/assets/icons/about.svg";
import ArticlesIcon from "shared/assets/icons/articles.svg";
import HomeIcon from "shared/assets/icons/home.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import { RoutePath } from "shared/config";
import { SidebarItemType } from "../../types/Sidebar";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
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
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: `${RoutePath.profile}/${userData.id}`,
        text: "profile-link",
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        text: "articles-link",
        Icon: ArticlesIcon,
        authOnly: true,
      }
    );
  }

  return sidebarItemsList;
});
