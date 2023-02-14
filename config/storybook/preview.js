import { addDecorator } from "@storybook/react";
import { StyleDecorator, ThemeDecorator, RouterDecorator } from "../../src/shared/config/storybook/decorators";
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

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
