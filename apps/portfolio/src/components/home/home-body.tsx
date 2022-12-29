import React from "react";
import { SkillsTemplate } from "../../templates/skills.template";
import headerImage from "../../assets/stavrialena-gontzou-68y-oRxeY_Y-unsplash.webp";
import { Link } from "../shared/link";
import { useTranslation } from "next-i18next";

export interface Props {}

/**
 * An HomeBody React Component.
 * @author Jane Will
 * @version 0.1
 */
export const HomeBody: React.FC<Props> = () => {
  const { t } = useTranslation(["home"]);
  return (
    <SkillsTemplate
      header={{
        headline: {
          headline: t("headline"),
          subheadline: t("subheadline"),
        },
        source: {
          href: "https://unsplash.com/@stavrialena",
          copyright: "Stavrialena Gontzou",
        },
        body: (
          <>
            {t("body1")}{" "}
            {
              <Link
                external
                aria-label="trans woman"
                target="_blank"
                rel="noreferrer"
                className="underline"
                href="https://transequality.org/issues/resources/frequently-asked-questions-about-transgender-people"
              >
                {t("body2")}
              </Link>
            }{" "}
            {t("body3")}
          </>
        ),
        src: headerImage,
        background: "bg-navy-500",
        buttons: [{ href: "/bio", children: t("ctaButton") }],
      }}
    />
  );
};
