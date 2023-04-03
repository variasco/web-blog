import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CommentItem } from "./CommentItem";

export default {
  title: "entities/Comment/CommentItem",
  component: CommentItem,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  comment: { id: "1", text: "Sample Text 1", user: { id: "1", username: "admin" } },
};

export const Loading = Template.bind({});
Loading.args = {
  comment: { id: "1", text: "Sample Text 1", user: { id: "1", username: "admin" } },
  isLoading: true,
};
