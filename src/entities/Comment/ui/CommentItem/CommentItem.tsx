import { RoutePath } from "shared/config";
import { classNames as cn } from "shared/lib";
import { AppLink, AppLinkTheme, Avatar, Skeleton, Text } from "shared/ui";
import { Comment } from "../../model/types/Comment";
import styles from "./CommentItem.module.scss";

export interface CommentItemProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentItem = (props: CommentItemProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={cn(styles.root, {}, [className, styles.loading])}>
        <div className={styles.header}>
          <Skeleton borderRadius={"50%"} width={30} height={30} />
          <Skeleton width={100} height={24} />
        </div>
        <Skeleton width={"100%"} height={50} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={cn(styles.root, {}, [className])}>
      <AppLink
        theme={AppLinkTheme.INVERTED}
        to={`${RoutePath.profile}${comment.user.id}`}
        className={styles.header}
      >
        {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
        <Text title={comment.user.username} />
      </AppLink>
      <Text text={comment.text} />
    </div>
  );
};
