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
import { ProfilePicture } from "../components/shared/profilePicture";
import { headlineShowUpAnimation } from "../animations/headlines";
import { DataTestIds } from "@portfolio/shared-testing";

export interface Props {
  header: {
    headline: HeadlineProps;
    body?: React.ReactNode | string;
    buttons?: ButtonProps[];
  } & HeaderProps;
  skills?: SkillsProps;
  githubProfileUrl?: string;
}

const MotionHeadline = motion(Headline, { forwardMotionProps: true });
const MotionBody = motion(HeadlineBody, { forwardMotionProps: true });
const MotionButton = motion(Button);

/**
 * An SkillsTemplate React Component.
 * @author Jane Will
 * @version 0.1
 */
export const SkillsTemplate: React.FC<Props> = ({
  header: { src, className, headline, body, buttons, source },
  skills,
  githubProfileUrl,
}) => {
  return (
    <div>
      <Header
        src={src}
        className={className}
        indicator={skills && <ScrollDownIndicator className="z-10" />}
        source={source}
      >
        {githubProfileUrl && (
          <ProfilePicture
            alt="Github Profile Picture"
            src={githubProfileUrl}
            layout="fill"
          />
        )}
        <MotionHeadline
          {...headline}
          variants={headlineShowUpAnimation}
          initial="hidden"
          animate="enter"
        />
        {body && (
          <MotionBody
            variants={headlineShowUpAnimation}
            initial="hidden"
            animate="enter"
          >
            {body}
          </MotionBody>
        )}
        {buttons && (
          <div className="mt-6 inline-flex">
            {buttons.map((button, index) => (
              <MotionButton
                variants={headlineShowUpAnimation}
                initial="hidden"
                animate="enter"
                key={index}
                {...(button as any)}
              />
            ))}
          </div>
        )}
      </Header>
      <main data-testid={DataTestIds.SKILL_BODY_CONTAINER}>
        {skills && (
          <div className="max-w-7xl mx-auto">
            <Skills {...skills} />
          </div>
        )}
      </main>
    </div>
  );
};
