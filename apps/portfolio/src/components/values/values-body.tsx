import { useTranslation } from "next-i18next";
import React from "react";
import { SkillsTemplate } from "../../templates/skills.template";
import stoneImage from "../../assets/sean-stratton-ObpCE_X3j6U-unsplash-min.jpg";
import {
  UserGroupIcon,
  FlagIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";

export interface Props {}

/**
 * An ValuesBody React Component.
 * @author Jane Will
 * @version 0.1
 */
export const ValuesBody: React.FC<Props> = () => {
  const { t } = useTranslation(["values"]);
  return (
    <SkillsTemplate
      header={{
        headline: { headline: t("headline"), subheadline: t("subheadline") },
        src: stoneImage,
        source: {
          copyright: "Sean Stratton",
          href: "https://unsplash.com/@seanstratton",
        },
        className: "bg-[#849566]",
      }}
      skills={{
        title: t("bodyTitle"),
        skills: [
          {
            title: t("skills.coherence.title"),
            description: t("skills.coherence.description"),
            icon: <UserGroupIcon className="w-6 h-6 text-white" />,
          },
          {
            title: t("skills.diversity.title"),
            description: t("skills.diversity.description"),
            icon: <FlagIcon className="w-6 h-6 text-white" />,
          },
          {
            title: t("skills.flexibility.title"),
            description: t("skills.flexibility.description"),
            icon: <BriefcaseIcon className="w-6 h-6 text-white" />,
          },
        ],
      }}
    />
  );
};
