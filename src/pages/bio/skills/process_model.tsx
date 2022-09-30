import { NextSeo } from "next-seo";
import React from "react";
import { SkillsTemplate } from "../../../templates/skills.template";
import processImage from "../../../assets/kaleidico-3V8xo5Gbusk-unsplash.jpg";
import { UsersIcon } from "@heroicons/react/24/solid";
import AtlassianIcon from "../../../assets/atlassian-1.svg";
import JiraIcon from "../../../assets/jira-1.svg";
import ConfluenceIcon from "../../../assets/confluence-1.svg";
import BitbucketIcon from "../../../assets/bitbucket-icon.svg";
import TeamsIcon from "../../../assets/microsoft-teams-1.svg";
import MicrosoftIcon from "../../../assets/microsoft-5.svg";
import OutlookIcon from "../../../assets/outlook-1.svg";
import PowerpointIcon from "../../../assets/powerpoint-2.svg";
import WordIcon from "../../../assets/word-1.svg";
import ExcelIcon from "../../../assets/excel-4.svg";
import SlackIcon from "../../../assets/slack-1.svg";

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
              bubbles: [
                {
                  icon: <JiraIcon className="w-6 h-6" />,
                  href: "https://www.atlassian.com/jira",
                  external: true,
                },
                {
                  icon: <BitbucketIcon className="w-6 h-6" />,
                  href: "https://www.atlassian.com/bitbucket",
                  external: true,
                },
                {
                  icon: <ConfluenceIcon className="w-6 h-6" />,
                  href: "https://www.atlassian.com/confluence",
                  external: true,
                },
              ],
            },
            {
              title: "Microsoft Office",
              description:
                "Microsoft Teams is a platform developed by Microsoft that combines chat, meetings, notes and attachments. The service is integrated into the Microsoft 365 suite with Microsoft Office and Skype/Skype for Business. Microsoft Teams help and FAQ content is available in 37 languages. In addition, the collaboration software offers extensions that can be integrated with third-party products. Microsoft launched the service globally on March 14, 2017.",
              icon: <MicrosoftIcon className="w-6 h-6" />,
              href: "https://www.microsoft.com/",
              external: true,
              bubbles: [
                {
                  icon: <TeamsIcon className="w-6 h-6" />,
                  href: "https://www.microsoft.com/teams",
                  external: true,
                },
                {
                  icon: <WordIcon className="w-6 h-6" />,
                  href: "https://www.microsoft.com/word",
                  external: true,
                },
                {
                  icon: <OutlookIcon className="w-6 h-6" />,
                  href: "https://www.microsoft.com/outlook",
                  external: true,
                },
                {
                  icon: <PowerpointIcon className="w-6 h-6" />,
                  href: "https://www.microsoft.com/powerpoint",
                  external: true,
                },
                {
                  icon: <ExcelIcon className="w-6 h-6" />,
                  href: "https://www.microsoft.com/excel",
                  external: true,
                },
              ],
            },
            {
              title: "Slack",
              description:
                "Slack is a messaging program designed specifically for the office, but has also been adopted for personal use. Developed by the Canadian software company Slack Technologies, and now owned by Salesforce, Slack offers many IRC-style features, including persistent chat rooms (channels) organized by topic, private groups, and direct messaging. In addition to these online communication features, Slack integrates with other software.",
              icon: <SlackIcon className="w-6 h-6" />,
              href: "https://www.slack.com/",
              external: true,
            },
          ],
        }}
      />
    </>
  );
};

export default ProcessModel;
