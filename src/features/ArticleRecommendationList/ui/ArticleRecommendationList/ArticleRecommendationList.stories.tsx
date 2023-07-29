import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Article } from "entities/Article";
import withMock from "storybook-addon-mock";
import { ArticleRecommendationList } from "./ArticleRecommendationList";

export default {
  title: "features/ArticleRecommendationList",
  component: ArticleRecommendationList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticleRecommendationList>;

const Template: ComponentStory<typeof ArticleRecommendationList> = (args) => (
  <ArticleRecommendationList {...args} />
);

const article: Article = {
  blocks: [],
  createdAt: "01.01.1970",
  id: "",
  img: "",
  subtitle: "subtitle text",
  title: "title text",
  type: [],
  user: { id: "1", username: "user" },
  views: 123,
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_limit=3`,
      method: "GET",
      status: 200,
      response: [
        { ...article, id: 1 },
        { ...article, id: 2 },
        { ...article, id: 3 },
      ],
    },
  ],
};
