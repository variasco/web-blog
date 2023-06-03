// Адрес страницы и позиция скрола
type ScrollSchema = Record<string, number>;

export interface ScrollSaveSchema {
  scroll: ScrollSchema;
}
