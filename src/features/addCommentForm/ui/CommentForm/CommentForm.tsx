import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames as cn } from "shared/lib";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components";
import { useAppDispatch } from "shared/lib/hooks";
import { Button, Input, ButtonTheme } from "shared/ui";
import { getCommentFormText } from "../../model/selectors/getCommentFormText/getCommentForm";
import { commentFormActions, commentFormReducer } from "../../model/slice/CommentFormSlice";
import styles from "./CommentForm.module.scss";

export interface CommentFormProps {
  className?: string;
  onSendComment: (value: string) => void;
}

const reducers: ReducersList = {
  commentForm: commentFormReducer,
};

const CommentForm = (props: CommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const text = useSelector(getCommentFormText);
  const dispatch = useAppDispatch();

  const onCommentChange = useCallback(
    (value: string) => {
      dispatch(commentFormActions.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || "");
    onCommentChange("");
  }, [onCommentChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={cn(styles.root, {}, [className])}>
        <Input
          className={styles.input}
          value={text}
          onChange={onCommentChange}
          placeholder={t("enter-comment-text")}
        />
        <Button onClick={onSendHandler} theme={ButtonTheme.OUTLINE}>
          {t("send")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default CommentForm;
