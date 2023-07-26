import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import DateIcon from "shared/assets/icons/date.svg";
import ViewsIcon from "shared/assets/icons/views.svg";
import { classNames as cn } from "shared/lib";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components";
import { useAppDispatch } from "shared/lib/hooks";
import { Avatar, HStack, Icon, Skeleton, Text, VStack } from "shared/ui";
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
      return <ArticleTextBlockComponent key={block.id} block={block} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent key={block.id} block={block} />;
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent key={block.id} block={block} />;

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
      <VStack gap="8">
        <Skeleton style={{ margin: "0 auto" }} width={200} height={200} borderRadius="50%" />
        <Skeleton width="50%" height={32} />
        <Skeleton width="100%" height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
      </VStack>
    );
  } else if (error) {
    content = (
      <Text
        align={"center"}
        title={t("an-error-occurred-while-loading-the-article")}
      ></Text>
    );
  } else {
    content = (
      <VStack gap="8">
        <HStack justify="center">
          <Avatar src={data?.img} size={200} />
        </HStack>
        <Text title={data?.title} text={data?.subtitle} size={"size_l"} />
        <HStack gap="8" align="center">
          <Icon Svg={ViewsIcon} />
          <Text text={String(data?.views)} />
        </HStack>
        <HStack gap="8" align="center">
          <Icon Svg={DateIcon} />
          <Text text={data?.createdAt} />
        </HStack>
        {data?.blocks.map(renderBlock)}
      </VStack>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeOnUnmount>
      <div className={cn(className)}>{content}</div>
    </DynamicModuleLoader>
  );
};
