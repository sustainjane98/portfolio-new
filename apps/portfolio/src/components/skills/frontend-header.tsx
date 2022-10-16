import React from "react";
import { Header } from "../shared/header";
import { Headline } from "../shared/headline";
import frontendImage from "../../assets/charlesdeluvio-pjAH2Ax4uWk-unsplash.jpg";
import { HeadlineBody } from "../shared/headline-body";
import { ScrollDownIndicator } from "../shared/scroll-down-indicator";

export interface Props {}

/**
 * An FrontendHeader React Component.
 * @author Jane Will
 * @version 0.1
 */
export const FrontendHeader: React.FC<Props> = () => {
  return (
    <Header src={frontendImage} className="bg-[#0c1116]">
      <Headline
        headline="My frontend Skills"
        subheadline="I am a frontend developer"
      />
      <HeadlineBody>
        I burn for frontend development. I am particularly familiar with the
        following technologies in this area...
      </HeadlineBody>
      <ScrollDownIndicator />
    </Header>
  );
};
