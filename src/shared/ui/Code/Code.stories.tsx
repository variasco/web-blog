import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config";
import { Code } from "./Code";

export default {
  title: "shared/Code",
  component: Code,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: `<!DOCTYPE html>
<html>
  <body>
    <p id="hello"></p>

    <script>
      document.getElementById("hello").innerHTML = "Hello, world!";
    </script>
  </body>
</html>;`,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  text: `<!DOCTYPE html>
<html>
  <body>
    <p id="hello"></p>

    <script>
      document.getElementById("hello").innerHTML = "Hello, world!";
    </script>
  </body>
</html>;`,
};
PrimaryDark.decorators = [ThemeDecorator("app-dark-theme")];
