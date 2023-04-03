import { Comment } from "../../model/types/Comment";
import { classNames as cn } from "shared/lib";
import styles from "./CommentItem.module.scss";
import { Avatar, Text, Skeleton } from "shared/ui";

export interface CommentItemProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentItem = (props: CommentItemProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={cn(styles.root, {}, [className])}>
        <div className={styles.header}>
          <Skeleton borderRadius={"50%"} width={30} height={30} />
          <Skeleton width={100} height={24} />
        </div>
        <Skeleton width={"100%"} height={50} />
      </div>
    );
  }

  return (
    <div className={cn(styles.root, {}, [className])}>
      <div className={styles.header}>
        {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
        <Text title={comment.user.username} />
      </div>
      <Text text={comment.text} />
    </div>
  );
};
