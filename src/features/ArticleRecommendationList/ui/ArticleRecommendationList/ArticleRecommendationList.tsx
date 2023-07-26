import { ArticleList } from "entities/Article";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib";
import { Loader, Text, VStack } from "shared/ui";
import { useGetArticleRec } from "../../api/articleRecommendationsApi";

export interface ArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList = (props: ArticleRecommendationListProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const { isError, isLoading, data: articles } = useGetArticleRec(3);

  if (isLoading) return <Loader />;
  if (isError) return null;

  return (
    <VStack gap="8" className={cn(className)}>
      <Text size={"size_l"} title={t("we-recommend")} />
      <ArticleList
        style={{
          flexWrap: "nowrap",
          overflowY: "hidden",
          overflowX: "auto",
          padding: "0 2px 5px 0",
        }}
        articles={articles}
        target="_blank"
      />
    </VStack>
  );
};
