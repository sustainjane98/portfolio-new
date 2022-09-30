import { NextSeo } from "next-seo";
import React from "react";
import { SkillsTemplate } from "../../../templates/skills.template";
import processImage from "../../../assets/kaleidico-3V8xo5Gbusk-unsplash.jpg";
import { UsersIcon } from "@heroicons/react/24/solid";
import AtlassianIcon from "../../../assets/atlassian-1.svg";

export interface Props {}

/**
 * An ProcessModel React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
const ProcessModel: React.FC<Props> = () => {
  return (
    <>
      <NextSeo />
      <SkillsTemplate
        header={{
          headline: {
            headline: "My Project Management skills",
            subheadline: "I am Agile",
          },
          src: processImage,
          className: "bg-[#7e7e80]",
        }}
        skills={{
          title: "Project Management Skills",
          skills: [
            {
              title: "Scrum",
              description:
                "Scrum, or SCRUM, is a framework for project management with an initial emphasis on software development, although it has been used in other fields including research, sales, marketing and advanced technologies. It is designed for teams of ten or fewer members who break their work into goals that can be completed within time-boxed iterations, called sprints, no longer than one month and most commonly two weeks. The scrum team assesses progress in time-boxed daily meetings of 15 minutes or fewer, called daily scrums.",
              icon: <UsersIcon className="w-6 h-6 fill-white" />,
              href: "https://www.scrum.org/resources/what-is-scrum",
              external: true,
            },
            {
              title: "Atlassian Suite",
              description:
                "Atlassian Corporation Plc is an Australian software company that develops products for software developers, project managers and other software development teams. The company is domiciled in the UK, with global headquarters in Sydney, Australia, and US headquarters in San Francisco.",
              icon: <AtlassianIcon className="w-8 h-8" />,
              href: "https://www.atlassian.com/",
              external: true,
            },
          ],
        }}
      />
    </>
  );
};

export default ProcessModel;
