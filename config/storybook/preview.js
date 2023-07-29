import { addDecorator } from "@storybook/react";
import { Theme } from "../../src/app/providers/ThemeProvider";
import {
  StyleDecorator,
  I18NextDecorator,
  RouterDecorator,
  ThemeDecorator,
  SuspenseDecorator,
} from "../../src/shared/config";

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
addDecorator(SuspenseDecorator);
