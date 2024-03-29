import { useTranslation } from "react-i18next";
import { Text, VStack } from "shared/ui";
import { Comment } from "../../model/types/Comment";
import { CommentItem } from "../CommentItem/CommentItem";

export interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack gap="4" className={className}>
        <CommentItem isLoading />
        <CommentItem isLoading />
        <CommentItem isLoading />
      </VStack>
    );
  }

  return (
    <VStack gap="4" className={className}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentItem isLoading={isLoading} key={comment.id} comment={comment} />
        ))
      ) : (
        <Text text={t("no-comments")} />
      )}
    </VStack>
  );
};
