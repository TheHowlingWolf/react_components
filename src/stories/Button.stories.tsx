import React from "react";
import { Button } from "../components/Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atomic/Button",
  component: Button,
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
