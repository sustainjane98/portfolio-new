import React from "react";
import { SkillsTemplate } from "../../templates/skills.template";
import officeImage from "../../assets/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg";
import { useTranslation } from "next-i18next";
import AgidoIcon from "../../assets/agido.svg";
import TediIcon from "../../assets/tedi.svg";
import BrockhausIcon from "../../assets/logo-brockhaus.svg";
import CreatokiaIcon from "../../assets/creatokia.svg";

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
        headline: { subheadline: t("subheadline") },
        src: officeImage,
        background: "bg-[#565250]",
        body: t("body"),
        source: {
          copyright: "Alex Kotliarskyi",
          href: "https://unsplash.com/@frantic",
        },
        pills: [
          { children: t("skills.bookwire.title") },
          { children: t("skills.brockhaus.title") },
          { children: t("skills.creatokia.title") },
          { children: t("skills.bookwireOS.title") },
        ],
      }}
      showProfilePic={true}
      skills={[
        {
          title: t("bodyTitle"),
          skills: [
            {
              title: t("skills.agido.title"),
              description: t("skills.agido.description"),
              icon: <AgidoIcon className="w-14 h-14 fill-white text-white" />,
              href: "https://www.agido.com/",
              external: true,
              "aria-label": "Agido Link",
              dateFrom: t("skills.agido.dateFrom"),
              dateTo: t("skills.agido.dateTo"),
            },
            {
              title: t("skills.bookwire.title"),
              description: t("skills.bookwire.description"),
              icon: (
                <div>
                  <span className="font-bold text-xl">B</span>
                </div>
              ),
              href: "https://www.bookwire.de/",
              external: true,
              "aria-label": "Bookwire Link",
              dateFrom: t("skills.bookwire.dateFrom"),
              dateTo: t("skills.bookwire.dateTo"),
              links: [
                {
                  href: "/certificate-bookwire.pdf",
                  external: true,
                  description: t("certificate"),
                  download: t("certificate-filename"),
                },
              ],
            },
            {
              title: t("skills.tedi.title"),
              description: t("skills.tedi.description"),
              icon: <TediIcon className="w-8 h-8" />,
              href: "https://www.tedi.com/",
              external: true,
              "aria-label": "Bookwire Link",
              dateFrom: t("skills.tedi.dateFrom"),
              dateTo: t("skills.tedi.dateTo"),
            },
            {
              title: t("skills.brockhaus.title"),
              description: t("skills.brockhaus.description"),
              icon: <BrockhausIcon className="w-6 h-6" />,
              href: "https://www.brockhaus-ag.de/",
              external: true,
              "aria-label": "brockhaus Link",
              dateFrom: t("skills.brockhaus.dateFrom"),
            },
          ],
        },
        {
          title: t("bodyTitle2"),
          skills: [
            {
              icon: <CreatokiaIcon className="w-8 h-8 fill-white" />,
              description: t("skills.creatokia.description"),
              title: t("skills.creatokia.title"),
              href: "https://www.creatokia.com/",
              external: true,
            },
            {
              icon: (
                <div className="w-8 h-8 text-white flex items-center justify-center">
                  <span>OS</span>
                </div>
              ),
              description: t("skills.bookwireOS.description"),
              title: t("skills.bookwireOS.title"),
              href: "https://www.bookwire.de/bookwire-os/",
              external: true,
            },
          ],
        },
      ]}
    />
  );
};
