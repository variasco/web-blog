import { RoutePath } from "shared/config";
import { classNames as cn } from "shared/lib";
import { AppLink, AppLinkTheme, Avatar, HStack, Skeleton, Text, VStack } from "shared/ui";
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
      <VStack gap="16" className={cn(className, styles.loading)}>
        <HStack align="center" gap="16">
          <Skeleton borderRadius={"50%"} width={30} height={30} />
          <Skeleton width={100} height={24} />
        </HStack>
        <Skeleton width={"100%"} height={50} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={cn(styles.root, {}, [className])}>
      <AppLink theme={AppLinkTheme.INVERTED} to={`${RoutePath.profile}${comment.user.id}`}>
        <HStack align="center" gap="16">
          {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
          <Text title={comment.user.username} />
        </HStack>
      </AppLink>
      <Text text={comment.text} />
    </div>
  );
};
