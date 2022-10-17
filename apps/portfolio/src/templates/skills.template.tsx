import React from "react";
import { Header, Props as HeaderProps } from "../components/shared/header";
import {
  Headline,
  Props as HeadlineProps,
} from "../components/shared/headline";
import { HeadlineBody } from "../components/shared/headline-body";
import { ScrollDownIndicator } from "../components/shared/scroll-down-indicator";
import { Skills, Props as SkillsProps } from "../components/shared/skills";
import { Button, Props as ButtonProps } from "../components/shared/button";
import { motion } from "framer-motion";
import { globalAnimationVariants } from "../animations/global";
import { ProfilePicture } from "../components/shared/profilePicture";

export interface Props {
  header: {
    headline: HeadlineProps;
    body?: React.ReactNode | string;
    buttons?: ButtonProps[];
  } & HeaderProps;
  skills?: SkillsProps;
  githubProfileUrl?: string;
}

/**
 * An SkillsTemplate React Component.
 * @author Jane Will
 * @version 0.1
 */
export const SkillsTemplate: React.FC<Props> = ({
  header: { src, className, headline, body, buttons },
  skills,
  githubProfileUrl,
}) => {
  return (
    <motion.div
      variants={globalAnimationVariants}
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "linear" }} // Set the transition to linear
      className=""
    >
      <Header
        src={src}
        className={className}
        indicator={skills && <ScrollDownIndicator className="z-10" />}
      >
        {githubProfileUrl && (
          <ProfilePicture
            alt="Github Profile Picture"
            src={githubProfileUrl}
            layout="fill"
          />
        )}
        <Headline {...headline} />
        {body && <HeadlineBody>{body}</HeadlineBody>}
        {buttons && (
          <div className="mt-6 inline-flex">
            {buttons.map((button, index) => (
              <Button key={index} {...button} />
            ))}
          </div>
        )}
      </Header>
      <main>
        {skills && (
          <div className="max-w-7xl mx-auto">
            <Skills {...skills} />
          </div>
        )}
      </main>
    </motion.div>
  );
};
