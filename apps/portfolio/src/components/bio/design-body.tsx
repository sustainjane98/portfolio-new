import React from "react";
import { SkillsTemplate } from "../../templates/skills.template";
import uiImage from "../../assets/ux-indonesia-qC2n6RQU4Vw-unsplash.webp";
import FigmaIcon from "../../assets/figma-1.svg";
import AdobeXDIcon from "../../assets/adobe-xd-1.svg";
import AffinityIcon from "../../assets/affinity-1.svg";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "next-i18next";

export interface Props {}

/**
 * An DesignBody React Component.
 * @author Jane Will
 * @version 0.1
 */
export const DesignBody: React.FC<Props> = () => {
  const { t } = useTranslation(["design"]);
  return (
    <SkillsTemplate
      header={{
        headline: {
          headline: t("headline"),
          subheadline: t("subheadline"),
        },
        src: uiImage,
        className: "bg-[#949694]",
        source: {
          href: "https://unsplash.com/@uxindo",
          copyright: "UX Indonesia",
        },
      }}
      skills={{
        title: t("bodyTitle"),
        skills: [
          {
            title: t("skills.figma.title"),
            stars: 4,
            description: t("skills.figma.description"),
            href: "https://www.figma.com/",
            external: true,
            icon: <FigmaIcon className="w-6 h-6" />,
            "aria-label": "Figma Link",
          },
          {
            title: t("skills.adobeXd.title"),
            stars: 2,
            description: t("skills.adobeXd.description"),
            href: "https://www.adobe.com/products/xd.html",
            external: true,
            icon: <AdobeXDIcon className="w-8 h-8" />,
            "aria-label": "Adobe XD Link",
          },
          {
            title: t("skills.affinity.title"),
            stars: 3,
            description: t("skills.affinity.description"),
            href: "https://affinity.serif.com/",
            external: true,
            icon: <AffinityIcon className="w-8 h-8 fill-white" />,
            "aria-label": "Affinity Suite Link",
          },
          {
            title: t("skills.dui.title"),
            stars: 3,
            description: t("skills.dui.description"),
            href: "https://designingui.com/",
            external: true,
            icon: <BookOpenIcon className="w-8 h-8 fill-white" />,
            "aria-label": "Designing User Interfaces Book Link",
          },
        ],
      }}
    />
  );
};
