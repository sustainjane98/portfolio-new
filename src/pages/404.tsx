import React from "react";
import { SkillsTemplate } from "../templates/skills.template";
import errorImage from "../assets/elisa-ventur-bmJAXAz6ads-unsplash.jpg";
import { NextSeo } from "next-seo";
export interface Props {}

/**
 * An 404" React Component.
 * @author
 * @version 0.1
 */
const ErrorPage: React.FC<Props> = () => {
  return (
    <>
      <NextSeo title="Something went wrong..." />
      <SkillsTemplate
        header={{
          headline: {
            headline: "Something went wrong",
            subheadline: "Wanna go back to main page?",
          },
          buttons: [{ href: "/", children: "Go Back" }],
          src: errorImage,
          className: "bg-[#707476]",
        }}
      />
    </>
  );
};

export default ErrorPage;
