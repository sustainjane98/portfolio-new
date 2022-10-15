import { NextPage } from "next";
import React from "react";
import { SkillsTemplate } from "../../templates/skills.template";
import callcenterImage from "../../assets/charanjeet-dhiman-mHusyBu4bxM-unsplash.webp";
import { NextSeo } from "next-seo";

/**
 * An Done React Component.
 * @author Jane Will
 * @version 0.1
 */
const Done: NextPage = () => {
  return (
    <>
      <NextSeo title="Contact Request Submitted" noindex />
      <SkillsTemplate
        header={{
          headline: {
            headline: "I received your message",
            subheadline: "I will answer as fast as possible",
          },
          src: callcenterImage,
          buttons: [{ children: "Contact again", href: "/contactMe" }],
        }}
      />
    </>
  );
};

export default Done;
