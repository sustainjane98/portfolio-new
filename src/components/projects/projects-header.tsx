import React from "react";
import { SkillsTemplate } from "../../templates/skills.template";
import projectsImage from "../assets/markus-winkler-Q2J2qQsoYH8-unsplash.jpg";
import CreatokiaIcon from "../assets/creatokia.svg";
import BookwireOSIcon from "../assets/bookwire-os.svg";

export interface Props {}

/**
 * An ProjectsBody React Component.
 * @author Jane Will
 * @version 0.1
 */
export const ProjectsBody: React.FC<Props> = () => {
  return (
    <SkillsTemplate
      header={{
        headline: {
          headline: "My Projects",
          subheadline: "The Projects i developed and maintained",
        },
        src: projectsImage,
      }}
      skills={{
        title: "Projects",
        skills: [
          {
            icon: <CreatokiaIcon className="w-8 h-8 fill-white" />,
            description:
              "Creatokia is an NFT Marketplace for digital media. It is developed with Next.js and React. I developed an entire design system based on design specifications.",
            title: "Creatokia",
            href: "https://www.creatokia.com/",
            external: true,
          },
          {
            icon: (
              <div className="w-8 h-8 text-white flex items-center justify-center">
                <span>OS</span>
              </div>
            ),
            description:
              "I developed new features in the existent Bookwire OS System with React in Frontend. I transferred the technology to SPA.",
            title: "Bookwire OS",
            href: "https://www.bookwire.de/bookwire-os/",
            external: true,
          },
        ],
      }}
    />
  );
};
