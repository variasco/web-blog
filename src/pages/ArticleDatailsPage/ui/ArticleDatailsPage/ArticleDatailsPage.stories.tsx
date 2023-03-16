import { ComponentMeta, ComponentStory } from "@storybook/react";
import ArticleDatailsPage from "./ArticleDatailsPage";

export default {
  title: "shared/ArticleDatailsPage",
  component: ArticleDatailsPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleDatailsPage>;

const Template: ComponentStory<typeof ArticleDatailsPage> = (args) => (
  <ArticleDatailsPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
