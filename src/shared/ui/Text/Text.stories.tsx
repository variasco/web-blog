import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook";
import { Text } from "./Text";

export default {
  title: "shared/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Title for title",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto?",
};

export const PrimarySizeL = Template.bind({});
PrimarySizeL.args = {
  title: "Title for title",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto?",
  size: "size_l",
};

export const Error = Template.bind({});
Error.args = {
  title: "Title for title",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto?",
  theme: "error",
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: "Title for title",
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto?",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: "Title for title",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto?",
};
PrimaryDark.decorators = [ThemeDecorator("app-dark-theme")];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: "Title for title",
};
OnlyTitleDark.decorators = [ThemeDecorator("app-dark-theme")];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto?",
};
OnlyTextDark.decorators = [ThemeDecorator("app-dark-theme")];
