import ViewsIcon from "shared/assets/icons/views.svg";
import { classNames as cn } from "shared/lib";
import { Card, Icon, Text, Avatar, Button, ThemeButton } from "shared/ui";
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from "../../model/types/Article";
import styles from "./ArticleListItem.module.scss";
import { useTranslation } from "react-i18next";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
  const { className, article, view } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.articles_details + article.id);
  }, [article, navigate]);

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
            <Button onClick={onOpenArticle} theme={ThemeButton.OUTLINE}>
              {t("read-more")}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={cn(styles.root, {}, [className, styles[view]])}>
      <Card onClick={onOpenArticle}>
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
    </div>
  );
};
