import { ComponentMeta, ComponentStory } from "@storybook/react";
import CommentForm from "./CommentForm";
import { action } from "@storybook/addon-actions";
import { StoreDecorator } from "shared/config";
export default {
  title: "features/CommentForm",
  component: CommentForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentForm>;

const Template: ComponentStory<typeof CommentForm> = (args) => <CommentForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onSendComment: action("onSendComment"),
};
Primary.decorators = [StoreDecorator({})];
