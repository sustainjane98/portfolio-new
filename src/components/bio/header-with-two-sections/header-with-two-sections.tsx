import React from "react";
import { Header } from "../../shared/header";
import programmingBackground from "../../../assets/radowan-nakif-rehan-cYyqhdbJ9TI-unsplash.webp";
import { Headline } from "../../shared/headline";
import { HeadlineBody } from "../../shared/headline-body";
import { ScrollDownIndicator } from "../../shared/scroll-down-indicator";

export interface Props {}

/**
 * An HeaderWithTwoSections React Component.
 * @author Jane Will
 * @version 0.1
 */
export const HeaderWithTwoSections: React.FC<Props> = () => {
  return (
    <>
      <Header src={programmingBackground} className="bg-[#0c1116]">
        <Headline
          headline="I am Jane"
          subheadline="I am a software developer"
        />
        <HeadlineBody>
          I am a full-stack developer who is on fire for frontend development. I
          am particularly familiar with the following technologies...
        </HeadlineBody>
        <ScrollDownIndicator />
      </Header>
    </>
  );
};
