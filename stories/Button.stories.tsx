import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { appTheme } from "../constants/theme";
import { ThemeProvider } from "styled-components";
import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    hasNextButton: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    disabled: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={appTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ backgroundColor: "black", padding: "20px" }}>
    <Button {...args} />
  </div>
);

export const FullButton = Template.bind({});

FullButton.args = {
  title: "Button",
  buttonType: "filled",
};
