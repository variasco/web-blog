import { HTMLAttributeAnchorTarget } from "react";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib";
import { HStack, Text } from "shared/ui";
import { Article } from "../../model/types/Article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import styles from "./ArticleList.module.scss";
import { ArticleView } from "../../model/consts/consts";

export interface ArticleListProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.LIST ? 3 : 9)
    .fill(0)
    .map((_, i) => <ArticleListItemSkeleton key={i} view={view} />);
};

export const ArticleList = (props: ArticleListProps) => {
  const {
    className,
    articles,
    target,
    isLoading = false,
    view = ArticleView.TILES,
    ...otherProps
  } = props;
  const { t } = useTranslation();

  const renederArticle = (article: Article) => {
    return <ArticleListItem key={article.id} article={article} view={view} target={target} />;
  };

  if (!isLoading && !articles.length) {
    return (
      <HStack className={cn(className, styles[view])}>
        <Text title={t("articles-not-found")} />
      </HStack>
    );
  }

  return (
    <HStack {...otherProps} gap="16" className={cn(className, styles[view])}>
      {articles.length ? articles.map(renederArticle) : null}
      {isLoading && getSkeletons(view)}
    </HStack>
  );
};
