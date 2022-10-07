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
      <HeaderWithTwoSections />
      <Skills
        title="Skills"
        id="skills"
        skills={[
          {
            title: "Frontend",
            description:
              "The frontend is the presentation layer, i.e. the part of an application that the viewer can see, for example in the form of a graphical user interface (GUI). ",
            href: `${pathname}/skills/frontend`,
            icon: <ComputerDesktopIcon className="w-8 h-8" />,
          },
          {
            title: "Backend",
            description:
              "The backend is the part of an IT system that deals with data processing in the background - the data layer. The term is used to subdivide more complex software structures.",
            href: `${pathname}/skills/backend`,
            icon: <ServerIcon className="w-8 h-8" />,
          },
          {
            title: "Design",
            description:
              "The term Project Management is used in various contexts. For example, in business Project Managementing the enterprise Project Management is often referred to as the business Project Management.",
            href: `${pathname}/skills/design`,
            icon: <PencilIcon className="w-6 h-6" />,
          },
          {
            title: "Project Managements",
            description:
              "The term Project Management is used in various contexts. For example, in business Project Managementing the enterprise Project Management is often referred to as the business Project Management.",
            href: `${pathname}/skills/process_model`,
            icon: <ArrowTrendingUpIcon className="w-8 h-8" />,
          },
        ]}
      />
      <Footer />
    </motion.main>
  );
};

export default Biography;
