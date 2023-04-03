import { memo } from "react";
import { classNames as cn } from "shared/lib";
import { Code } from "shared/ui";
import { ArticleCodeBlock } from "../../model/types/Article";

export interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props;

  return <Code className={className} text={block.code} />;
});
