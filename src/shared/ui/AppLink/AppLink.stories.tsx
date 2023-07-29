import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config";
import { AppLink } from "./AppLink";

export default {
  title: "shared/AppLink",
  component: AppLink,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { to: "/" },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Text",
  theme: "inverted",
};

export const Red = Template.bind({});
Red.args = {
  children: "Text",
  theme: "red",
};

export const Inverted = Template.bind({});
Inverted.args = {
  children: "Text",
  theme: "inverted",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: "Text",
  theme: "primary",
};
PrimaryDark.decorators = [ThemeDecorator("app-dark-theme")];

export const RedDark = Template.bind({});
RedDark.args = {
  children: "Text",
  theme: "red",
};
RedDark.decorators = [ThemeDecorator("app-dark-theme")];

export const InvertedDark = Template.bind({});
InvertedDark.args = {
  children: "Text",
  theme: "inverted",
};
InvertedDark.decorators = [ThemeDecorator("app-dark-theme")];
