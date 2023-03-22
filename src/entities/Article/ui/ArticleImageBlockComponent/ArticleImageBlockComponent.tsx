import { ArticleImageBlock } from "../../model/types/Article";
import { memo } from "react";
import { classNames as cn } from "shared/lib";
import styles from "./ArticleImageBlockComponent.module.scss";
import { Text, TextAlign } from "shared/ui";

export interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;

  return (
    <div className={cn(styles.root, {}, [className])}>
      <img className={styles.img} src={block.src} alt={block?.title} />
      {block.title && <Text className={styles.title} text={block.title} align={TextAlign.CENTER} />}
    </div>
  );
});
