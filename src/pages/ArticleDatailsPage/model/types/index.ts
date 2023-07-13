import { ArticleDatailsCommentsSchema } from "./ArticleDatailsCommentsSchema";
import { ArticleDetailsPageRecommendationsSchema } from "./ArticleDetailsPageRecommendationsSchema";

export interface ArticleDetailsPageSchema {
  comments: ArticleDatailsCommentsSchema;
  recomendations: ArticleDetailsPageRecommendationsSchema;
}
