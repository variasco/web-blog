import { Comment } from "../../model/types/Comment";
import { classNames as cn } from "shared/lib";
import styles from "./CommentList.module.scss";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui";
import { CommentItem } from "../CommentItem/CommentItem";

export interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  return (
    <div className={cn(styles.root, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => <CommentItem isLoading={isLoading} key={comment.id} comment={comment} />)
      ) : (
        <Text text={t("no-comments")} />
      )}
    </div>
  );
};
