import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook";
import ForbiddenPage from "./ForbiddenPage";

export default {
  title: "pages/ForbiddenPage",
  component: ForbiddenPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = (args) => <ForbiddenPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
