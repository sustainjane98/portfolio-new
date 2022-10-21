import { useTranslation } from "next-i18next";
import React from "react";
import { SkillsTemplate } from "../../templates/skills.template";
import bibImage from "../../assets/susan-q-yin-2JIvboGLeho-unsplash.jpg";

export interface Props {}

/**
 * An EducationBody React Component.
 * @author Jane Will
 * @version 0.1
 */
export const EducationBody: React.FC<Props> = () => {
  const { t } = useTranslation(["education"]);

  return (
    <SkillsTemplate
      header={{
        headline: { headline: t("headline"), subheadline: t("subheadline") },
        src: bibImage,
      }}
      skills={{
        title: t("bodyTitle"),
        skills: [
          {
            title: t("skills.phoenixGym.title"),
            description: t("skills.phoenixGym.description"),
            icon: (
              <div>
                <span className="text-lg font-bold">PG</span>
              </div>
            ),
            dateFrom: t("skills.phoenixGym.dateFrom"),
            dateTo: t("skills.phoenixGym.dateTo"),
            href: "https://www.phoenix-gymnasium-hoerde.de/",
            external: true,
            "aria-label": "Phoenix Gymnasium Link",
          },
          {
            title: t("skills.fhDortmund.title"),
            description: t("skills.fhDortmund.description"),
            dateFrom: t("skills.fhDortmund.dateFrom"),
            dateTo: t("skills.fhDortmund.dateTo"),
            icon: (
              <div>
                <span className="text-lg font-bold">FH</span>
              </div>
            ),
            href: "https://www.fh-dortmund.de/",
            external: true,
            "aria-label": "FH Dortmund Link",
          },
        ],
      }}
    />
  );
};
