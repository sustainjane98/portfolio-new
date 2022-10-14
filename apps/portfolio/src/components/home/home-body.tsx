import React from "react";
import { SkillsTemplate } from "../../templates/skills.template";
import headerImage from "../../assets/stavrialena-gontzou-68y-oRxeY_Y-unsplash.webp";

export interface Props {}

/**
 * An HomeBody React Component.
 * @author Jane Will
 * @version 0.1
 */
export const HomeBody: React.FC<Props> = () => {
  return (
    <SkillsTemplate
      header={{
        headline: {
          headline: "I am the caterpillar that became a butterfly",
          subheadline: "I build web pages with passion",
        },
        body: (
          <>
            I am a{" "}
            {
              <a
                target="_blank"
                rel="noreferrer"
                className="underline"
                href="https://transequality.org/issues/resources/frequently-asked-questions-about-transgender-people"
              >
                trans woman
              </a>
            }{" "}
            and software developer, with the mission to produce beautiful and
            functional web applications. If you like, we can get to know each
            other better
          </>
        ),
        src: headerImage,
        className: "bg-navy-500",
        buttons: [{ href: "/bio", children: "Get to know me" }],
      }}
    />
  );
};
