import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { StoreDecorator, ThemeDecorator } from "shared/config";
import ProfilePage from "./ProfilePage";

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    profile: {
      form: {
        first: "Иван",
        lastname: "Курзенёв",
        age: 25,
        city: "Санкт-Петербург",
        country: Country.Russia,
        currency: Currency.RUB,
        username: "admin",
        avatar: "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
      },
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  StoreDecorator({
    profile: {
      form: {
        first: "Иван",
        lastname: "Курзенёв",
        age: 25,
        city: "Санкт-Петербург",
        country: Country.Russia,
        currency: Currency.RUB,
        username: "admin",
        avatar: "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
      },
    },
  }),
  ThemeDecorator(Theme.DARK),
];
