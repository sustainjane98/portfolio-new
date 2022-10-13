import { NextPage } from "next";
import React from "react";
import { SkillsTemplate } from "../../templates/skills.template";
import callcenterImage from "../../assets/charanjeet-dhiman-mHusyBu4bxM-unsplash.webp";

/**
 * An Done React Component.
 * @author Jane Will
 * @version 0.1
 */
const Done: NextPage = () => {
  return (
    <SkillsTemplate
      header={{
        headline: {
          headline: "I received your message",
          subheadline: "I will answer as fast as possible",
        },
        src: callcenterImage,
      }}
    />
  );
};

export default Done;
