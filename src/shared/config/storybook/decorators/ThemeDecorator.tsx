import { Story } from "@storybook/api";
import { Theme } from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: () => Story) => {
  return (
    <div className={`app ${theme}`}>
      {StoryComponent()}
    </div>
  );
};
