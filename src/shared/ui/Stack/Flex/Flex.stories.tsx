/* eslint-disable i18next/no-literal-string */
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Flex } from "./Flex";

export default {
  title: "shared/Flex",
  component: Flex,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
    </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  direction: "column",
  children: (
    <>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
    </>
  ),
};
