import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/decorators";
import { Button } from "./Button";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Text",
};

export const PrimarySizeL = Template.bind({});
PrimarySizeL.args = {
  children: "Text",
  size: "size-l",
};

export const PrimarySizeXL = Template.bind({});
PrimarySizeXL.args = {
  children: "Text",
  size: "size-xl",
};

export const Clear = Template.bind({});
Clear.args = {
  children: "Text",
  theme: "clear",
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: "Text",
  theme: "clear",
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: "Text",
  theme: "clearInverted",
};

export const ClearInvertedDark = Template.bind({});
ClearInvertedDark.args = {
  children: "Text",
  theme: "clearInverted",
};
ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: "Text",
  theme: "outline",
};

export const OutlineRed = Template.bind({});
OutlineRed.args = {
  children: "Text",
  theme: "outline_red",
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: "Text",
  theme: "outline",
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: "Text",
  theme: "background",
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: "Text",
  theme: "backgroundInverted",
};

export const SquareM = Template.bind({});
SquareM.args = {
  children: ">",
  theme: "backgroundInverted",
  square: true,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: ">",
  theme: "backgroundInverted",
  square: true,
  size: "size-l",
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: ">",
  theme: "backgroundInverted",
  square: true,
  size: "size-xl",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Text",
  theme: "outline",
  disabled: true,
};
