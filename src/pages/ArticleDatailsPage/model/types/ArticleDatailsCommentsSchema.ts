import { EntityState } from "@reduxjs/toolkit";
import { Comment } from "entities/Comment";

export interface ArticleDatailsCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean;
  error?: string;
}
