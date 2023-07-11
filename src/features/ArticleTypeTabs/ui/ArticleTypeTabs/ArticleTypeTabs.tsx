import { ArticleType } from "entities/Article";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { TabItem, Tabs } from "shared/ui";

export interface ArticleTypeTabsProps {
  value: ArticleType;
  onTabClick: (tab: TabItem<ArticleType>) => void;
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
  const { onTabClick, value } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem<ArticleType>[]>(() => {
    const res: TabItem<ArticleType>[] = [];

    for (const key in ArticleType) {
      res.push({ content: t(key.toLowerCase()), value: key as ArticleType });
    }

    return res;
  }, [t]);

  return <Tabs tabs={typeTabs} value={value} onTabClick={onTabClick} />;
};
