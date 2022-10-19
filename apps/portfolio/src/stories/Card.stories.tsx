import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Card, Props as CardProps } from "../components/shared/card";
import { ReactComponent as ReactIcon } from "../assets/react-2.svg";
import { CardContainer } from "../components/shared/card-container";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {},
} as Meta;

const Template: Story<CardProps> = (args) => (
  <CardContainer>
    <Card {...args} />
  </CardContainer>
);

export const SkillCard = Template.bind({});

SkillCard.args = {
  icon: <ReactIcon className="w-6 h-6" />,
  title: "React Native",
  description:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  "aria-label": "React Native",
  href: "https://google.de",
  external: true,
  stars: 4,
};
