import React from "react";
import { SkillsTemplate } from "../../templates/skills.template";
import projectsImage from "../../assets/markus-winkler-Q2J2qQsoYH8-unsplash.jpg";
import CreatokiaIcon from "../../assets/creatokia.svg";
import { useTranslation } from "next-i18next";

export interface Props {}

/**
 * An ProjectsBody React Component.
 * @author Jane Will
 * @version 0.1
 */
export const ProjectsBody: React.FC<Props> = () => {
  const { t } = useTranslation(["projects"]);
  return (
    <SkillsTemplate
      header={{
        headline: {
          headline: t("headline"),
          subheadline: t("subheadline"),
        },
        src: projectsImage,
        shadowDefault: true,
        background: "bg-[#858a8c]",
        source: {
          copyright: "Markus Winkler",
          href: "https://unsplash.com/@markuswinkler",
        },
      }}
      skills={[
        {
          title: t("bodyTitle"),
          skills: [
            {
              icon: <CreatokiaIcon className="w-8 h-8 fill-white" />,
              description: t("projects.creatokia.description"),
              title: t("projects.creatokia.title"),
              href: "https://www.creatokia.com/",
              external: true,
            },
            {
              icon: (
                <div className="w-8 h-8 text-white flex items-center justify-center">
                  <span>OS</span>
                </div>
              ),
              description: t("projects.bookwireOS.description"),
              title: t("projects.bookwireOS.title"),
              href: "https://www.bookwire.de/bookwire-os/",
              external: true,
            },
          ],
        },
      ]}
    />
  );
};
