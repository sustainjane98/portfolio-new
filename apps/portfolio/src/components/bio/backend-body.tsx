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

export interface Props {}

/**
 * An BackendBody React Component.
 * @author Jane Will
 * @version 0.1
 */
export const BackendBody: React.FC<Props> = () => {
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
          headline: "My backend Skills",
          subheadline: "I am a backend developer",
        },
        body: "The backend is the part of an IT system that deals with data processing in the background - the data layer. The term is used to subdivide more complex software structures.",
        src: serverImage,
        className: "bg-[#070b0e]",
      }}
      skills={{
        title: "Backend Skills",
        skills: [
          {
            title: "Golang",
            description:
              "I have been studying the Golang programming language in my spare time. I was particularly impressed by the simplicity and the strength in the area of parallel processing. I used the language together with the Gin framework to create web servers. It is currently my most used language for backend applications. I hope that a better error handling will be implemented soon.",
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
            title: "Kotlin",
            description:
              "I have completed the tutorial of Kotlin, the language itself, but have not yet used it in a larger project. But I find it definitely more user friendly than Java.",
            href: "https://kotlinlang.org/",
            icon: <KotlinIcon className="w-6 h-6" />,
            external: true,
            bubbles: javaAndKotlin,
            "aria-label": "Kotlin Link",
          },
          {
            title: "Elixir",
            description:
              "I got involved with the Elixir programming language when I was looking into creating voice-based chat applications, like Discord. Discord uses Elixir for this functionality. Elixir has a very interesting error handling, which works either by throwing or by return types, but the missing typing didn't appeal to me very much.",
            href: "https://elixir-lang.org/",
            icon: <ElixirIcon className="w-10 h-10" />,
            external: true,
            "aria-label": "Elixir Link",
          },
          {
            title: "Java",
            description:
              "I have been working with Java already during my education in university and secondary school. In my studies I had subjects from the basics, over algorithms and data structures, to advanced technologies, like JavaFX. In my first part-time job, I then learned about data management with MySQL and Hibernate. Furthermore, I know my way around Spring and Lombok.",
            href: "https://www.java.com/download/manual.jsp",
            icon: <JavaIcon className="w-8 h-8" />,
            external: true,
            bubbles: javaAndKotlin,
            "aria-label": "Java Link",
          },
          {
            title: "API Design",
            description:
              "While working in the Java area, I learned a lot about creating REST APIs. In my spare time, I started to work with GraphQL in the Node.js area and I am still very enthusiastic about this technology. It allows to design an API as efficient as possible and at the same time to decide in the frontend which data is really needed for the current query.",
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
