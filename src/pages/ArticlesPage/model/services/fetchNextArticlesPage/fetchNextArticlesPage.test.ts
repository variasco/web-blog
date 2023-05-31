import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk";
import { fetchNextArticlesPage } from "./fetchNextArticlesPage";
import { ArticlesPageSchema } from "../../types/ArticlesPageSchema";
import { ArticleView } from "entities/Article";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

const articlesPage: ArticlesPageSchema = {
  entities: {},
  hasMore: true,
  ids: [],
  page: 2,
  view: ArticleView.TILES,
  limit: 5,
};

jest.mock("../fetchArticlesList/fetchArticlesList");

describe("fetchNextArticlesPage", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, { articlesPage });
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
  });
  test("fetchArticlesList not called", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: { ...articlesPage, hasMore: false },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toBeCalled();
  });
});
