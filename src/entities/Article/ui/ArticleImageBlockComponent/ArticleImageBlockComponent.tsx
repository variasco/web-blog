import { memo } from "react";
import { classNames as cn } from "shared/lib";
import { Text, VStack } from "shared/ui";
import { ArticleImageBlock } from "../../model/types/Article";
import styles from "./ArticleImageBlockComponent.module.scss";

export interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;

  return (
    <VStack align="center" gap="8" className={cn(className)}>
      <img className={styles.img} src={block.src} alt={block?.title} />
      {block.title && <Text text={block.title} align={"center"} />}
    </VStack>
  );
});
