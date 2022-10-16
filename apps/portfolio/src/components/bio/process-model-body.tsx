import React from "react";
import { SkillsTemplate } from "../../templates/skills.template";
import processImage from "../../assets/kaleidico-3V8xo5Gbusk-unsplash.webp";
import { UsersIcon } from "@heroicons/react/24/solid";
import AtlassianIcon from "../../assets/atlassian-1.svg";
import JiraIcon from "../../assets/jira-1.svg";
import ConfluenceIcon from "../../assets/confluence-1.svg";
import BitbucketIcon from "../../assets/bitbucket-icon.svg";
import TeamsIcon from "../../assets/microsoft-teams-1.svg";
import MicrosoftIcon from "../../assets/microsoft-5.svg";
import OutlookIcon from "../../assets/outlook-1.svg";
import PowerpointIcon from "../../assets/powerpoint-2.svg";
import WordIcon from "../../assets/word-1.svg";
import ExcelIcon from "../../assets/excel-4.svg";
import SlackIcon from "../../assets/slack-1.svg";

export interface Props {}

/**
 * An ProcessModelBody React Component.
 * @author Jane Will
 * @version 0.1
 */
export const ProcessModelBody: React.FC<Props> = () => {
  return (
    <SkillsTemplate
      header={{
        headline: {
          headline: "My Project Management Skills",
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
              "I have used Scrum practically in my last activities. Although it was a modified version due to the use of Atlassian Jira, I still had good experiences with agile working.",
            icon: <UsersIcon className="w-6 h-6 fill-white" />,
            href: "https://www.scrum.org/resources/what-is-scrum",
            external: true,
            "aria-label": "Scrum Link",
          },
          {
            title: "Atlassian Suite",
            description:
              "I practically used Atlassian Suite to have my development tasks clearly laid out. We used Jira to distribute tasks, Bitbucket for source code versioning and Confluence for notes and other documents.",
            icon: <AtlassianIcon className="w-8 h-8" />,
            bubbles: [
              {
                icon: <JiraIcon className="w-6 h-6" />,
                href: "https://www.atlassian.com/jira",
                external: true,
                "aria-label": "Atlassian Jira Link",
              },
              {
                icon: <BitbucketIcon className="w-6 h-6" />,
                href: "https://www.atlassian.com/bitbucket",
                external: true,
                "aria-label": "Atlassian Bitbucket Link",
              },
              {
                icon: <ConfluenceIcon className="w-6 h-6" />,
                href: "https://www.atlassian.com/confluence",
                external: true,
                "aria-label": "Atlassian Confluence Link",
              },
            ],
          },
          {
            title: "Microsoft Office",
            description:
              "I used the Microsoft Office Suite in my practical work to hold video conferences and communicate with my team via Teams. In addition, I had to fill out my timesheet in Excel. In the course of my studies, I also created various presentations and documents in PowerPoint and Word, and I know my way around these as well.",
            icon: <MicrosoftIcon className="w-6 h-6" />,
            bubbles: [
              {
                icon: <TeamsIcon className="w-6 h-6" />,
                href: "https://www.microsoft.com/teams",
                external: true,
                "aria-label": "Microsoft Teams Link",
              },
              {
                icon: <WordIcon className="w-6 h-6" />,
                href: "https://www.microsoft.com/word",
                external: true,
                "aria-label": "Microsoft Word Link",
              },
              {
                icon: <OutlookIcon className="w-6 h-6" />,
                href: "https://www.microsoft.com/outlook",
                external: true,
                "aria-label": "Microsoft Outlook Link",
              },
              {
                icon: <PowerpointIcon className="w-6 h-6" />,
                href: "https://www.microsoft.com/powerpoint",
                external: true,
                "aria-label": "Microsoft PowerPoint Link",
              },
              {
                icon: <ExcelIcon className="w-6 h-6" />,
                href: "https://www.microsoft.com/excel",
                external: true,
                "aria-label": "Microsoft Excel Link",
              },
            ],
          },
          {
            title: "Slack",
            description:
              "I used the Slack messaging app in my job to keep in touch with my team and the company. In the process, I learned how this application works and how to use it effectively for team communication.",
            icon: <SlackIcon className="w-6 h-6" />,
            href: "https://www.slack.com/",
            external: true,
            "aria-label": "Slack Messenger Link",
          },
        ],
      }}
    />
  );
};
