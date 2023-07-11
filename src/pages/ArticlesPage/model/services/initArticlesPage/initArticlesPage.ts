import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { ArticleSortField } from "entities/Article";
import { SortOrder } from "shared/types";
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slice/ArticlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  "articlesPage/initArticlesPage",
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlesPageInited(getState());

    if (inited) return;

    const orderFromURL = searchParams.get("o");
    const sortFromURL = searchParams.get("s");
    const searchFromURL = searchParams.get("q");

    if (orderFromURL) dispatch(articlesPageActions.setOrder(orderFromURL as SortOrder));
    if (sortFromURL) dispatch(articlesPageActions.setSort(sortFromURL as ArticleSortField));
    if (searchFromURL) dispatch(articlesPageActions.setSearch(searchFromURL));

    dispatch(articlesPageActions.initView());
    dispatch(fetchArticlesList({}));
  }
);
