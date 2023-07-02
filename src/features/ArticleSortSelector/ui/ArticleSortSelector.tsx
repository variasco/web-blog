import { ArticleSortField } from "entities/Article";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib";
import { SortOrder } from "shared/types";
import { Select, SelectOption } from "shared/ui";
import styles from "./ArticleSortSelector.module.scss";

export interface ArticleSortSelectorProps {
  className?: string;
  sortOrder: SortOrder;
  sortType: ArticleSortField;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSortType: (newSortType: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const { className, sortOrder, sortType, onChangeOrder, onChangeSortType } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      { value: "asc", content: t("ascending") },
      { value: "desc", content: t("descending") },
    ],
    [t]
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      { value: ArticleSortField.CREATED_AT, content: t("by-date") },
      { value: ArticleSortField.TITLE, content: t("by-title") },
      { value: ArticleSortField.VIEWS, content: t("by-views") },
    ],
    [t]
  );

  return (
    <div className={cn(styles.root, className)}>
      <Select
        value={sortOrder}
        onChange={onChangeOrder}
        options={orderOptions}
        label={t("sorting-direction")}
      />
      <Select
        value={sortType}
        onChange={onChangeSortType}
        options={sortFieldOptions}
        label={t("sort-type")}
      />
    </div>
  );
};
