import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { appTheme } from "../constants/theme";
import { ThemeProvider } from "styled-components";
import TypoWrapper from "./TypoWrapper";

export default {
  title: "Typo",
  component: TypoWrapper,
  argTypes: {},
  decorators: [
    (Story) => (
      <ThemeProvider theme={appTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof TypoWrapper>;

const Template: ComponentStory<typeof TypoWrapper> = (args) => (
  <TypoWrapper {...args} />
);

export const Heading = Template.bind({});

Heading.args = {
  args: [
    {
      type: "H1_B",
      color: "BLACK",
      children: "Heading1 Bold",
    },
    {
      type: "H2_B",
      color: "BLACK",
      children: "Heading2 Bold",
    },
    {
      type: "H3_B",
      color: "BLACK",
      children: "Heading3 Bold",
    },
  ],
};

export const Body = Template.bind({});

Body.args = {
  args: [
    {
      type: "B1_R",
      color: "BLACK",
      children: "Body1 Regular",
    },
    {
      type: "B2_R",
      color: "BLACK",
      children: "Body2 Regular",
    },
    {
      type: "B3_R",
      color: "BLACK",
      children: "Body3 Regular",
    },
  ],
};
