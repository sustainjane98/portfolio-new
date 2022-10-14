import React from "react";
import { SkillsTemplate } from "../../templates/skills.template";
import errorImage from "../../assets/elisa-ventur-bmJAXAz6ads-unsplash.webp";

export interface Props {}

/**
 * An NotFoundBody React Component.
 * @author Jane Will
 * @version 0.1
 */
export const NotFoundBody: React.FC<Props> = () => {
  return (
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
  );
};
