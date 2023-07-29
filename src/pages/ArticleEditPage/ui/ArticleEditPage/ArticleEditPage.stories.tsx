import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "shared/config";
import ArticleEditPage from "./ArticleEditPage";

export default {
  title: "pages/Article/ArticleEditPage",
  component: ArticleEditPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
