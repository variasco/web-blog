import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config";
import { Modal } from "./Modal";

export default {
  title: "shared/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam esse quia quo recusandae, earum tenetur molestias sit, distinctio, in optio quod! Magni omnis inventore amet praesentium eos incidunt eum nisi sapiente iste architecto? Similique autem magni nihil? Facilis tempore minus suscipit fugit ipsam laborum, non consectetur aliquid necessitatibus ut porro!",
  open: true,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam esse quia quo recusandae, earum tenetur molestias sit, distinctio, in optio quod! Magni omnis inventore amet praesentium eos incidunt eum nisi sapiente iste architecto? Similique autem magni nihil? Facilis tempore minus suscipit fugit ipsam laborum, non consectetur aliquid necessitatibus ut porro!",
  open: true,
};
PrimaryDark.decorators = [ThemeDecorator("app-dark-theme")];
