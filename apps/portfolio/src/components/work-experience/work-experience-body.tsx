import React from "react";
import { SkillsTemplate } from "../../templates/skills.template";
import officeImage from "../../assets/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg";
import { useTranslation } from "next-i18next";
import AgidoIcon from "../../assets/agido.svg";

export interface Props {}

/**
 * An WorkExperienceBody React Component.
 * @author Jane Will
 * @version 0.1
 */
export const WorkExperienceBody: React.FC<Props> = () => {
  const { t } = useTranslation(["work-experience"]);
  return (
    <SkillsTemplate
      header={{
        headline: { headline: t("headline"), subheadline: t("subheadline") },
        src: officeImage,
        source: {
          copyright: "Alex Kotliarskyi",
          href: "https://unsplash.com/@frantic",
        },
      }}
      skills={{
        title: t("bodyTitle"),
        skills: [
          {
            title: t("skills.agido.title"),
            description: t("skills.agido.description"),
            icon: <AgidoIcon className="w-14 h-14 fill-white text-white" />,
          },
          {
            title: t("skills.bookwire.title"),
            description: t("skills.bookwire.description"),
            icon: (
              <div>
                <span>B</span>
              </div>
            ),
          },
        ],
      }}
    />
  );
};
