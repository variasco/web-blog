import { memo } from "react";
import { classNames as cn } from "shared/lib";
import { Text } from "shared/ui";
import { ArticleTextBlock } from "../../model/types/Article";
import styles from "./ArticleTextBlockComponent.module.scss";

export interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { className, block } = props;

  return (
    <div className={cn(styles.root, {}, [className])}>
      {block.title && <Text className={styles.title} title={block.title} />}
      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} className={styles.paragraph} text={paragraph} />
      ))}
    </div>
  );
});
