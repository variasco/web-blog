import { Story } from "@storybook/api";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (StoryComponent: () => Story) => (
  <BrowserRouter>
    {StoryComponent()}
  </BrowserRouter>
);
