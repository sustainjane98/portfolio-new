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
import { useTranslation } from "next-i18next";

export interface Props {}

/**
 * An ProcessModelBody React Component.
 * @author Jane Will
 * @version 0.1
 */
export const ProcessModelBody: React.FC<Props> = () => {
  const { t } = useTranslation(["processModel"]);
  return (
    <SkillsTemplate
      header={{
        headline: {
          headline: t("headline"),
          subheadline: t("subheadline"),
        },
        src: processImage,
        className: "bg-[#7e7e80]",
        source: {
          href: "https://unsplash.com/@kaleidico",
          copyright: "Kaleidico",
        },
      }}
      skills={{
        title: t("bodyTitle"),
        skills: [
          {
            title: t("skills.scrum.title"),
            description: t("skills.scrum.description"),
            icon: <UsersIcon className="w-6 h-6 fill-white" />,
            href: "https://www.scrum.org/resources/what-is-scrum",
            external: true,
            "aria-label": "Scrum Link",
          },
          {
            title: t("skills.atlassian.title"),
            description: t("skills.atlassian.description"),
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
            title: t("skills.office.title"),
            description: t("skills.office.description"),
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
            title: t("skills.slack.title"),
            description: t("skills.slack.description"),
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
