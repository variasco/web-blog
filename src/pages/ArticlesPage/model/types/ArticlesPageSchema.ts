import { EntityState } from "@reduxjs/toolkit";
import type { Article, ArticleSortField, ArticleView } from "entities/Article";
import type { SortOrder } from "shared/types";

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleView;

  // pagination
  page: number;
  limit?: number;
  hasMore: boolean;
  _inited: boolean;

  // filters
  order: SortOrder;
  sort: ArticleSortField;
  search: string
}
