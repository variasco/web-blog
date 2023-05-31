import { classNames as cn } from "shared/lib";
import styles from "./ArticleList.module.scss";
import { Article, ArticleView } from "../../model/types/Article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

export interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.LIST ? 3 : 9)
    .fill(0)
    .map((_, i) => <ArticleListItemSkeleton key={i} view={view} />);
};

export const ArticleList = (props: ArticleListProps) => {
  const { className, articles, isLoading = false, view = ArticleView.TILES } = props;

  const renederArticle = (article: Article) => {
    return <ArticleListItem key={article.id} article={article} view={view} />;
  };

  return (
    <div className={cn(styles.root, {}, [className, styles[view]])}>
      {articles.length ? articles.map(renederArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
};
