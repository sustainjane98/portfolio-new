import { useRouter } from "next/router";
import React from "react";
import { HeaderWithTwoSections } from "../../components/bio/header-with-two-sections/header-with-two-sections";
import { Skills } from "../../components/shared/skills";
import {
  PencilIcon,
  ComputerDesktopIcon,
  ServerIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/20/solid";
import { Footer } from "../../components/shared/footer";
import { motion } from "framer-motion";
import { globalAnimationVariants } from "../../animations/global";
import { NextSeo } from "next-seo";

export interface Props {}

/**
 * An Biography React Component.
 * @author Jane Will
 * @version 0.1
 */
const Biography: React.FC<Props> = () => {
  const { pathname } = useRouter();
  return (
    <motion.main
      variants={globalAnimationVariants}
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "linear" }} // Set the transition to linear
      className=""
    >
      <NextSeo title="Who am I?" />
      <HeaderWithTwoSections />
      <Skills
        title="Skills"
        id="skills"
        skills={[
          {
            title: "Frontend",
            description:
              "In my studies I found the access to web application development through the subject web technologies. Since I had my problems with JavaScript due to the missing typing, I first dealt with TypeScript and later with the React library. In my first job, I realized several React web applications and learned a lot about design systems and practical web development.",
            href: `${pathname}/skills/frontend`,
            icon: <ComputerDesktopIcon className="w-8 h-8" />,
          },
          {
            title: "Backend",
            description:
              "In my studies I gained basic and advanced knowledge in the Java environment. In my spare time I also worked with Elixir and Golang. I also learned a lot about api design with rest and graphql.",
            href: `${pathname}/skills/backend`,
            icon: <ServerIcon className="w-8 h-8" />,
          },
          {
            title: "Design",
            description:
              "The field of user interface and user experience design has interested me a lot since my first experiences with web application development. Due to my practical experience in this field, I am very familiar with the implementation of design specifications. In addition, I have read renowned literature on the subject to be in the know.",
            href: `${pathname}/skills/design`,
            icon: <PencilIcon className="w-6 h-6" />,
          },
          {
            title: "Project Managements",
            description:
              "Modern software development works with agile tools. In my practical experience, I have already worked with the Atlassian Suite. In addition, I am familiar with modern communication applications, such as Slack and Microsoft Teams.",
            href: `${pathname}/skills/process_model`,
            icon: <ArrowTrendingUpIcon className="w-8 h-8" />,
          },
        ]}
      />
    </motion.main>
  );
};

export default Biography;
