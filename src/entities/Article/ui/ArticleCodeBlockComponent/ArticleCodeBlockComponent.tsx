import { memo } from "react";
import { classNames as cn } from "shared/lib";
import { Code } from "shared/ui";
import { ArticleCodeBlock } from "../../model/types/Article";
import styles from "./ArticleCodeBlockComponent.module.scss";

export interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props;

  return (
    <Code className={cn(styles.root, {}, [className])} text={block.code} />
  );
});
