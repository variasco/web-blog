import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import DateIcon from "shared/assets/icons/date.svg";
import ViewsIcon from "shared/assets/icons/views.svg";
import { classNames as cn } from "shared/lib";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components";
import { useAppDispatch } from "shared/lib/hooks";
import { Avatar, Icon, Skeleton, Text, TextAlign, TextSize } from "shared/ui";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading,
} from "../../model/selectots/articleDetails";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from "../../model/slice/ArticleDetailsSlice";
import { ArticleBlock, ArticleBlockType } from "../../model/types/Article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import styles from "./ArticleDetails.module.scss";

export interface ArticleDetailsProps {
  className?: string;
  id: string;
}

export const ArticleDetails = (props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const data = useSelector(getArticleDetailsData);
  const loading = useSelector(getArticleDetailsLoading);
  const error = useSelector(getArticleDetailsError);

  const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
  };

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent key={block.id} className={styles.block} block={block} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent key={block.id} className={styles.block} block={block} />;
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent key={block.id} className={styles.block} block={block} />;

    default:
      return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (loading) {
    content = (
      <div>
        <Skeleton className={styles.avatar} width={200} height={200} borderRadius="50%" />
        <Skeleton className={styles.title} width="50%" height={32} />
        <Skeleton className={styles.skeleton} width="100%" height={24} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
      </div>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t("an-error-occurred-while-loading-the-article")}
      ></Text>
    );
  } else {
    content = (
      <>
        <div className={styles.avatarWrapper}>
          <Avatar className={styles.avatar} src={data?.img} size={200} />
        </div>
        <Text
          className={styles.title}
          title={data?.title}
          text={data?.subtitle} 
          size={TextSize.L}
        />
        <div className={styles.articleInfo}>
          <Icon Svg={ViewsIcon} />
          <Text text={String(data?.views)} />
        </div>
        <div className={styles.articleInfo}>
          <Icon Svg={DateIcon} />
          <Text text={data?.createdAt} />
        </div>
        {data?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeOnUnmount>
      <div className={cn(styles.root, {}, [className])}>{content}</div>
    </DynamicModuleLoader>
  );
};
