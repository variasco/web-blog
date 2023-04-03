import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CommentList } from "./CommentList";

export default {
  title: "entities/Comment/CommentList",
  component: CommentList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  comments: [
    { id: "1", text: "Sample Text", user: { id: "1", username: "admin" } },
    { id: "2", text: "Sample Text 2", user: { id: "1", username: "admin" } },
    { id: "3", text: "Sample Text 3", user: { id: "2", username: "user" } },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  comments: [
    { id: "1", text: "Sample Text", user: { id: "1", username: "admin" } },
    { id: "2", text: "Sample Text 2", user: { id: "1", username: "admin" } },
    { id: "3", text: "Sample Text 3", user: { id: "2", username: "user" } },
  ],
  isLoading: true,
};
