import { memo } from "react";
import { classNames as cn } from "shared/lib";
import { Card, Skeleton } from "shared/ui";
import { ArticleView } from "../../model/types/Article";
import styles from "./ArticleListItem.module.scss";

export interface ArticleListItemSkeletonProps {
  view?: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const { view = ArticleView.TILES } = props;

  if (view === ArticleView.LIST) {
    return (
      <div className={cn(styles.root, {}, [styles[view]])}>
        <Card>
          <div className={styles.header}>
            <Skeleton borderRadius={"50%"} height={30} width={30} />
            <Skeleton className={styles.username} width={150} height={16} />
            <Skeleton className={styles.createdAt} width={150} height={16} />
          </div>
          <Skeleton className={styles.title} width={250} height={24} />
          <Skeleton className={styles.img} height={200} />
          <div className={styles.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={cn(styles.root, {}, [styles[view]])}>
      <Card>
        <div className={styles.imageWrapper}>
          <Skeleton className={styles.image} width={200} height={200} />
        </div>
        <div className={styles.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={styles.title} />
      </Card>
    </div>
  );
});
