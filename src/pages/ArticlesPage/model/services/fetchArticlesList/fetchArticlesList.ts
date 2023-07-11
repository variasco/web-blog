import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article, ArticleType } from "entities/Article";
import { addQueryParams } from "shared/lib";
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from "../../selectors/articlesPageSelectors";

interface FetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>("articlesPage/fetchArticlesList", async (_, thunkApi) => {
  const { rejectWithValue, extra, getState } = thunkApi;

  const limit = getArticlesPageLimit(getState());
  const page = getArticlesPageNum(getState());
  const sortType = getArticlesPageSort(getState());
  const sortOrder = getArticlesPageOrder(getState());
  const search = getArticlesPageSearch(getState());
  const type = getArticlesPageType(getState());

  try {
    addQueryParams({ s: sortType, o: sortOrder, t: type, q: search });
    const response = await extra.api.get<Article[]>("/articles", {
      params: {
        _expand: "user",
        _limit: limit,
        _page: page,
        _sort: sortType,
        _order: sortOrder,
        q: search,
        type: type === ArticleType.ALL ? undefined : type,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e: any) {
    return rejectWithValue(e?.response?.data?.message || e?.message || "Something went wrong");
  }
});
