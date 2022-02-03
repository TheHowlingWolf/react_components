import React from "react";
import { Button } from "../index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Atomic/Button",
  component: Button,
  decorators: [withDesign],
  argTypes: {
    variant: {
      options: ["contained", "outlined", "text"],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "This is button",
  variant: "outlined",
};

Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/olNbhykb7uZ5cUu9extGmL/Untitled?node-id=1%3A2",
  },
};
