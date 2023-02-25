import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator, ThemeDecorator } from "shared/config/storybook/decorators";
import { LoginForm } from "./LoginForm";

export default {
  title: "features/LoginForm",
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({ loginForm: { username: "", password: "" } })];

export const WithData = Template.bind({});
WithData.args = {};
WithData.decorators = [StoreDecorator({ loginForm: { username: "JohnDoe", password: "12345" } })];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  StoreDecorator({ loginForm: { username: "JohnDoe", password: "12345", isLoading: true } }),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
  StoreDecorator({ loginForm: { username: "JohnDoe", password: "12345", error: "Error message" } }),
];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ loginForm: { username: "", password: "" } }),
];
