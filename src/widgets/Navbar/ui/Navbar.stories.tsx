import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator, ThemeDecorator } from "shared/config";
import { Navbar } from "./Navbar";

export default {
  title: "widgets/Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({ user: { authData: undefined } })];

export const LightLoggedIn = Template.bind({});
LightLoggedIn.args = {};
LightLoggedIn.decorators = [
  StoreDecorator({ user: { authData: { id: "1", username: "JohnDoe" } } }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator("app-dark-theme"),
  StoreDecorator({ user: { authData: undefined } }),
];

export const DarkLoggedIn = Template.bind({});
DarkLoggedIn.args = {};
DarkLoggedIn.decorators = [
  ThemeDecorator("app-dark-theme"),
  StoreDecorator({ user: { authData: { id: "1", username: "JohnDoe" } } }),
];
