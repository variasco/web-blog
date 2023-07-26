import { rtkApi } from "shared/api";

const recommendatendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendations: build.query({
      query: (limit) => ({ url: "/articles", params: { _limit: limit } }),
    }),
  }),
  overrideExisting: false,
});

export const useGetArticleRec = recommendatendationsApi.useGetArticleRecommendationsQuery;
