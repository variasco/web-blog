import { useTranslation } from "react-i18next";
import ViewsIcon from "shared/assets/icons/views.svg";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames as cn } from "shared/lib";
import { AppLink, Avatar, Button, Card, Icon, Text, ThemeButton } from "shared/ui";
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from "../../model/types/Article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import styles from "./ArticleListItem.module.scss";
import { HTMLAttributeAnchorTarget } from "react";

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
    <>
      <Text className={styles.views} text={String(article.views)} />
      <Icon Svg={ViewsIcon} />
    </>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;

    return (
      <div className={cn(styles.root, {}, [className, styles[view]])}>
        <Card>
          <div className={styles.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text className={styles.username} text={article.user.username} />
            <Text className={styles.createdAt} text={article.createdAt} />
          </div>
          <Text className={styles.title} title={article.title} />
          {types}
          <img className={styles.img} src={article.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlockComponent className={styles.textBlock} block={textBlock} />
          )}
          <div className={styles.footer}>
            <AppLink target={target} to={`${RoutePath.articles_details}${article.id}`}>
              <Button theme={ThemeButton.OUTLINE}>{t("read-more")}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      className={cn(styles.root, {}, [className, styles[view]])}
      target={target}
      to={`${RoutePath.articles_details}${article.id}`}
    >
      <Card>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={article.img} alt={article.title} />
          <Text className={styles.date} text={article.createdAt} />
        </div>
        <div className={styles.infoWrapper}>
          {types}
          {views}
        </div>
        <Text className={styles.title} text={article.title} />
      </Card>
    </AppLink>
  );
};
