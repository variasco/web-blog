import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook";
import { Skeleton } from "./Skeleton";

export default {
  title: "shared/Skeleton",
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Rectangle = Template.bind({});
Rectangle.args = {
  width: "80%",
  height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
  borderRadius: "50%",
  width: 100,
  height: 100,
};

export const RectangleDark = Template.bind({});
RectangleDark.args = {
  width: "80%",
  height: 200,
};
RectangleDark.decorators = [ThemeDecorator("app-dark-theme")];

export const CircleDark = Template.bind({});
CircleDark.args = {
  borderRadius: "50%",
  width: 100,
  height: 100,
};
CircleDark.decorators = [ThemeDecorator("app-dark-theme")];
