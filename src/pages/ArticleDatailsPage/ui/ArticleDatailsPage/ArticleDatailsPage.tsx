import { ArticleDetails } from "entities/Article";
import { ArticleRecommendationList } from "features/ArticleRecommendationList";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components";
import { VStack } from "shared/ui";
import { Page } from "widgets/Page";
import { articleDetailsPageReducer } from "../../model/slice";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";

export interface ArticleDatailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDatailsPage = (props: ArticleDatailsPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  return (
    <DynamicModuleLoader reducers={reducers} removeOnUnmount>
      <Page className={className}>
        <VStack gap="16">
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRecommendationList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDatailsPage);
