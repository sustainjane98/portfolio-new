import React from "react";
import GraphQlIcon from "../../assets/graphql-logo-2.svg";
import { ServerIcon } from "@heroicons/react/24/solid";
import { SkillsTemplate } from "../../templates/skills.template";
import serverImage from "../../assets/adi-goldstein-EUsVwEOsblE-unsplash.webp";
import GolangIcon from "../../assets/golang-1.svg";
import KotlinIcon from "../../assets/kotlin-2.svg";
import ElixirIcon from "../../assets/elixir-1.svg";
import JavaIcon from "../../assets/java-14.svg";
import GinIcon from "../../assets/gin.svg";
import GooseIcon from "../../assets/goose_logo.svg";
import HibenateIcon from "../../assets/hibernate-icon.svg";
import SpringIcon from "../../assets/spring-3.svg";
import { useTranslation } from "next-i18next";

export interface Props {}

/**
 * An BackendBody React Component.
 * @author Jane Will
 * @version 0.1
 */
export const BackendBody: React.FC<Props> = () => {
  const { t } = useTranslation(["backend"]);
  const javaAndKotlin = [
    {
      icon: <HibenateIcon className="w-6 h-6" />,
      href: "https://hibernate.org/",
      external: true,
      "aria-label": "Hibernate Link",
    },
    {
      icon: <SpringIcon className="w-6 h-6" />,
      href: "https://spring.io/",
      external: true,
      "aria-label": "Spring Link",
    },
    {
      icon: (
        <div className="w-6 h-6 flex items-center justify-center">
          <span className="font-bold text-white">L</span>
        </div>
      ),
      href: "https://projectlombok.org/",
      external: true,
      "aria-label": "Project Lombok Link",
    },
  ];

  return (
    <SkillsTemplate
      header={{
        headline: {
          headline: t("headline"),
          subheadline: t("subheadline"),
        },
        body: t("body"),
        src: serverImage,
        background: "bg-[#070b0e]",
        source: {
          href: "https://unsplash.com/@adigold1",
          copyright: "Adi Goldstein",
        },
      }}
      skills={{
        title: t("skillsTitle"),
        skills: [
          {
            title: t("skills.golang.title"),
            stars: 4,
            description: t("skills.golang.description"),
            href: "https://go.dev/",
            icon: <GolangIcon className="w-8 h-8" />,
            external: true,
            "aria-label": "Golang Link",
            bubbles: [
              {
                icon: <GinIcon className="w-7 h-7" />,
                href: "https://github.com/gin-gonic/gin",
                external: true,
                "aria-label": "Gin Link",
              },
              {
                icon: <GooseIcon className="w-8 h-8" />,
                href: "https://github.com/pressly/goose",
                external: true,
                "aria-label": "Goose Link",
              },
            ],
          },
          {
            title: t("skills.kotlin.title"),
            stars: 1,
            description: t("skills.kotlin.description"),
            href: "https://kotlinlang.org/",
            icon: <KotlinIcon className="w-6 h-6" />,
            external: true,
            bubbles: javaAndKotlin,
            "aria-label": "Kotlin Link",
          },
          {
            title: t("skills.elixir.title"),
            stars: 3,
            description: t("skills.elixir.description"),
            href: "https://elixir-lang.org/",
            icon: <ElixirIcon className="w-10 h-10" />,
            external: true,
            "aria-label": "Elixir Link",
          },
          {
            title: t("skills.java.title"),
            stars: 4,
            description: t("skills.java.description"),
            href: "https://www.java.com/download/manual.jsp",
            icon: <JavaIcon className="w-8 h-8" />,
            external: true,
            bubbles: javaAndKotlin,
            "aria-label": "Java Link",
          },
          {
            title: t("skills.apiDesign.title"),
            stars: 4,
            description: t("skills.apiDesign.description"),
            icon: <ServerIcon className="w-8 h-8" />,
            bubbles: [
              {
                icon: (
                  <div>
                    <span>Rest</span>
                  </div>
                ),
                external: true,
                href: "https://www.codecademy.com/article/what-is-rest",
                "aria-label": "Representational State Transfer Link",
              },
              {
                icon: <GraphQlIcon className="w-8 h-8" />,
                external: true,
                href: "https://graphql.org/",
                "aria-label": "GraphQl Link",
              },
            ],
          },
        ],
      }}
    />
  );
};
