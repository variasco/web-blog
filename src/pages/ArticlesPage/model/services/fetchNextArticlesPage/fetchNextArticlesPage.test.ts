import { ArticleSortField, ArticleType, ArticleView } from "entities/Article";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk";
import { ArticlesPageSchema } from "../../types/ArticlesPageSchema";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { fetchNextArticlesPage } from "./fetchNextArticlesPage";

const articlesPage: ArticlesPageSchema = {
  entities: {},
  hasMore: true,
  ids: [],
  page: 2,
  view: ArticleView.TILES,
  limit: 5,
  _inited: false,
  search: "",
  sort: ArticleSortField.CREATED_AT,
  order: "desc",
  type: ArticleType.ALL,
};

jest.mock("../fetchArticlesList/fetchArticlesList");

describe("fetchNextArticlesPage", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, { articlesPage });
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({});
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
