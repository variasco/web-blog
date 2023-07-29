import { ArticleSortField } from "entities/Article";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { SortOrder } from "shared/types";
import { Select, SelectOption, VStack } from "shared/ui";

export interface ArticleSortSelectorProps {
  className?: string;
  sortOrder: SortOrder;
  sortType: ArticleSortField;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSortType: (newSortType: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const { sortOrder, sortType, onChangeOrder, onChangeSortType } = props;
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
    <VStack gap="8">
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
    </VStack>
  );
};
