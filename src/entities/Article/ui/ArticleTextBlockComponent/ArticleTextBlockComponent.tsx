import { memo } from "react";
import { Text, VStack } from "shared/ui";
import { ArticleTextBlock } from "../../model/types/Article";

export interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { className, block } = props;

  return (
    <VStack gap="16" className={className}>
      {block.title && <Text title={block.title} />}
      <VStack gap="8">
        {block.paragraphs.map((paragraph) => (
          <Text key={paragraph} text={paragraph} />
        ))}
      </VStack>
    </VStack>
  );
});
