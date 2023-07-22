import { ArticleImageBlock } from "../../model/types/Article";
import { memo } from "react";
import { classNames as cn } from "shared/lib";
import styles from "./ArticleImageBlockComponent.module.scss";
import { Text, TextAlign, VStack } from "shared/ui";

export interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;

  return (
    <VStack align="center" gap="8" className={cn(className)}>
      <img className={styles.img} src={block.src} alt={block?.title} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </VStack>
  );
});
