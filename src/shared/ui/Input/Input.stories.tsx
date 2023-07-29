import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config";
import { Input } from "./Input";

export default {
  title: "shared/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Label",
  value: "Text Sample",
  autofocus: true,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  placeholder: "Label",
  value: "Text Sample",
  autofocus: true,
};
PrimaryDark.decorators = [ThemeDecorator("app-dark-theme")];
