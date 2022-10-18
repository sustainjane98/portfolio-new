import React from "react";
import { SkillsTemplate } from "../../templates/skills.template";
import errorImage from "../../assets/elisa-ventur-bmJAXAz6ads-unsplash.webp";
import { useTranslation } from "next-i18next";

export interface Props {}

/**
 * An NotFoundBody React Component.
 * @author Jane Will
 * @version 0.1
 */
export const NotFoundBody: React.FC<Props> = () => {
  const { t } = useTranslation(["error"]);

  return (
    <SkillsTemplate
      header={{
        headline: {
          headline: t("headline"),
          subheadline: t("subheadline"),
        },
        buttons: [{ href: "/", children: t("buttonTitle") }],
        src: errorImage,
        className: "bg-[#707476]",
        source: {
          copyright: "Elisa Ventur",
          href: "https://unsplash.com/@elisa_ventur",
        },
      }}
    />
  );
};
