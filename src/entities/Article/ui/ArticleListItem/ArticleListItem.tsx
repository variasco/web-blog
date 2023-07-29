import { HTMLAttributeAnchorTarget } from "react";
import { useTranslation } from "react-i18next";
import ViewsIcon from "shared/assets/icons/views.svg";
import { RoutePath } from "shared/config/routeConfig/AppRoutesConst";
import { classNames as cn } from "shared/lib";
import { AppLink, Avatar, Button, Card, HStack, Icon, Text, VStack } from "shared/ui";
import { ArticleBlockType, ArticleView } from "../../model/consts/consts";
import { Article, ArticleTextBlock } from "../../model/types/Article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import styles from "./ArticleListItem.module.scss";

export interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation();

  const types = <Text className={styles.types} text={article.type.join(", ")} />;
  const views = (
    <HStack gap="8">
      <Text text={String(article.views)} />
      <Icon Svg={ViewsIcon} />
    </HStack>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;

    return (
      <Card className={cn(className)}>
        <VStack gap="4" className={styles[view]}>
          <HStack justify="between">
            <HStack gap="8">
              <Avatar size={30} src={article.user.avatar} />
              <Text text={article.user.username} />
            </HStack>
            <Text text={article.createdAt} />
          </HStack>
          <Text title={article.title} />
          {types}
          <img className={styles.img} src={article.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlockComponent className={styles.textBlock} block={textBlock} />
          )}
          <HStack justify="between">
            <AppLink target={target} to={`${RoutePath.articles}/${article.id}`}>
              <Button theme="outline">{t("read-more")}</Button>
            </AppLink>
            {views}
          </HStack>
        </VStack>
      </Card>
    );
  }

  return (
    <AppLink
      className={cn(className, styles[view])}
      target={target}
      to={`${RoutePath.articles}/${article.id}`}
    >
      <Card>
        <VStack gap="8">
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={article.img} alt={article.title} />
            <Text className={styles.date} text={article.createdAt} />
          </div>
          <HStack gap="8" justify="between">
            {types}
            {views}
          </HStack>
          <Text text={article.title} />
        </VStack>
      </Card>
    </AppLink>
  );
};
