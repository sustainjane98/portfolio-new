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

export interface Props {}

/**
 * An Biography React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
const Biography: React.FC<Props> = () => {
  const { pathname } = useRouter();
  return (
    <>
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
              "The term process model is used in various contexts. For example, in business process modeling the enterprise process model is often referred to as the business process model.",
            href: `${pathname}/skills/design`,
            icon: <PencilIcon className="w-6 h-6" />,
          },
          {
            title: "Process Models",
            description:
              "The term process model is used in various contexts. For example, in business process modeling the enterprise process model is often referred to as the business process model.",
            href: `${pathname}/skills/process_model`,
            icon: <ArrowTrendingUpIcon className="w-8 h-8" />,
          },
        ]}
      />
    </>
  );
};

export default Biography;