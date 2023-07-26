import { useParams } from "react-router-dom";
import { classNames as cn } from "shared/lib";
import { Text } from "shared/ui";
import { Page } from "widgets/Page";
import styles from "./ArticleEditPage.module.scss";

export interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const isEditing = Boolean(id);

  return (
    <Page className={cn(styles.root, className)}>
      {isEditing ? (
        <Text title={`Редактирование статьи c ID = ${id}`} text="WORK IN PROGRESS" size={"size_l"} />
      ) : (
        <Text title="Создание статьи" text="WORK IN PROGRESS" size={"size_l"} />
      )}
    </Page>
  );
};

export default ArticleEditPage;
