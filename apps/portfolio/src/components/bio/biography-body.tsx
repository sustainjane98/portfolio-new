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
import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation(["whoAmI"]);
  return (
    <SkillsTemplate
      header={{
        headline: {
          headline: t("headline"),
          subheadline: t("subheadline"),
        },
        src: programmingBackground,
        source: {
          href: "https://unsplash.com/@radowanrehan",
          copyright: "Radowan Nakif Rehan",
        },
        body: (
          <>
            {t("body", { returnObjects: true })[0]}{" "}
            {
              <a
                target="_blank"
                rel="noreferrer"
                className="underline"
                href="https://transequality.org/issues/resources/frequently-asked-questions-about-transgender-people"
              >
                {t("body", { returnObjects: true })[1]}
              </a>
            }{" "}
            {t("body", { returnObjects: true })[2]}
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
            title: t("skills.frontend.title"),
            description: t("skills.frontend.description"),
            href: `${pathname}/skills/frontend`,
            icon: <ComputerDesktopIcon className="w-8 h-8" />,
            "aria-label": "Frontend Skills Link",
          },
          {
            title: t("skills.backend.title"),
            description: t("skills.backend.description"),
            href: `${pathname}/skills/backend`,
            icon: <ServerIcon className="w-8 h-8" />,
            "aria-label": "Backend Skills Link",
          },
          {
            title: t("skills.design.title"),
            description: t("skills.design.description"),
            href: `${pathname}/skills/design`,
            icon: <PencilIcon className="w-6 h-6" />,
            "aria-label": "Design Skills Link",
          },
          {
            title: t("skills.projectManagement.title"),
            description: t("skills.projectManagement.description"),
            href: `${pathname}/skills/process_model`,
            icon: <ArrowTrendingUpIcon className="w-8 h-8" />,
            "aria-label": "Project Management Skills Link",
          },
        ],
      }}
    />
  );
};
