import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { Button } from "../Button/Button";

export default {
  title: "shared/Dropdown",
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "80px 40px" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  element: <Button theme="outline">{"Dropdown"}</Button>,
  options: [
    { content: "first option", value: "1" },
    { content: "second option", value: "2" },
    { content: "third option", value: "3" },
  ],
};
