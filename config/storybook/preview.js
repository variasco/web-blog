import { addDecorator } from "@storybook/react";
import {
  StyleDecorator,
  ThemeDecorator,
  RouterDecorator,
  I18NextDecorator,
} from "../../src/shared/config/storybook/decorators";
import { Theme } from "../../src/app/providers/ThemeProvider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", title: "English" },
        { value: "ru", title: "Русский" },
      ],
      title: true,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(I18NextDecorator);
addDecorator(RouterDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
