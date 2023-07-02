import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
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

  try {
    const response = await extra.api.get<Article[]>("/articles", {
      params: {
        _expand: "user",
        _limit: limit,
        _page: page,
        _sort: sortType,
        _order: sortOrder,
        q: search,
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
