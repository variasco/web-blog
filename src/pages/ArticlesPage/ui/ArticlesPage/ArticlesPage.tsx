import { ArticleList, ArticleView } from "entities/Article";
import { memo } from "react";

export interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;

  return (
    <div className={className}>
      <ArticleList isLoading view={ArticleView.LIST} articles={[]} />
    </div>
  );
};

export default memo(ArticlesPage);
