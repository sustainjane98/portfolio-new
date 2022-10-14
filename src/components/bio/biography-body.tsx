import React from "react";
import programmingBackground from "../../assets/radowan-nakif-rehan-cYyqhdbJ9TI-unsplash.webp";
import { ScrollDownIndicator } from "../shared/scroll-down-indicator";
import { SkillsTemplate } from "../../templates/skills.template";
import {
  ComputerDesktopIcon,
  ServerIcon,
  PencilIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

export interface Props {
  githubProfileUrl: string;
}

/**
 * An HeaderWithTwoSections React Component.
 * @author Jane Will
 * @version 0.1
 */
export const BiographyBody: React.FC<Props> = ({ githubProfileUrl }) => {
  const { pathname } = useRouter();

  return (
    <SkillsTemplate
      header={{
        headline: {
          headline: "I am Jane",
          subheadline: "I am a software developer",
        },
        src: programmingBackground,
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
            and full-stack developer who is on fire for frontend development. I
            am particularly familiar with the following technologies...
          </>
        ),
        indicator: <ScrollDownIndicator className="z-10" />,
        className: "bg-[#0c1116]",
      }}
      githubProfileUrl={githubProfileUrl}
      skills={{
        title: "Skills",
        skills: [
          {
            title: "Frontend",
            description:
              "In my studies I found the access to web application development through the subject web technologies. Since I had my problems with JavaScript due to the missing typing, I first dealt with TypeScript and later with the React library. In my first job, I realized several React web applications and learned a lot about design systems and practical web development.",
            href: `${pathname}/skills/frontend`,
            icon: <ComputerDesktopIcon className="w-8 h-8" />,
          },
          {
            title: "Backend",
            description:
              "In my studies I gained basic and advanced knowledge in the Java environment. In my spare time I also worked with Elixir and Golang. I also learned a lot about api design with rest and graphql.",
            href: `${pathname}/skills/backend`,
            icon: <ServerIcon className="w-8 h-8" />,
          },
          {
            title: "Design",
            description:
              "The field of user interface and user experience design has interested me a lot since my first experiences with web application development. Due to my practical experience in this field, I am very familiar with the implementation of design specifications. In addition, I have read renowned literature on the subject to be in the know.",
            href: `${pathname}/skills/design`,
            icon: <PencilIcon className="w-6 h-6" />,
          },
          {
            title: "Project Managements",
            description:
              "Modern software development works with agile tools. In my practical experience, I have already worked with the Atlassian Suite. In addition, I am familiar with modern communication applications, such as Slack and Microsoft Teams.",
            href: `${pathname}/skills/process_model`,
            icon: <ArrowTrendingUpIcon className="w-8 h-8" />,
          },
        ],
      }}
    />
  );
};
