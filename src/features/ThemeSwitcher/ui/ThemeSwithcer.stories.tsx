import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default {
  title: "features/ThemeSwitcher",
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator("app-dark-theme")];
