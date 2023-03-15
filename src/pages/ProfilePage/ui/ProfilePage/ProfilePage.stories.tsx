import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from "shared/assets/tests/storybook.jpg";
import { StoreDecorator, ThemeDecorator } from "shared/config/storybook/decorators";
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
        avatar,
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
        avatar,
      },
    },
  }),
  ThemeDecorator(Theme.DARK),
];
