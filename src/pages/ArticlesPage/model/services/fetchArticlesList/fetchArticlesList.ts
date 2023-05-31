import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { getArticlesPageLimit } from "../../selectors/articlesPageSelectors";

interface FetchArticlesListProps {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>("articlesPage/fetchArticlesList", async (props, thunkApi) => {
  const { rejectWithValue, extra, getState } = thunkApi;   
  const { page = 1 } = props;
  const limit = getArticlesPageLimit(getState());

  try {
    const response = await extra.api.get<Article[]>("/articles", {
      params: {
        _expand: "user",
        _limit: limit,
        _page: page
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
