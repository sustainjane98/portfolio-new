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
import { Pill, Props as PillProps } from "../components/shared/pill";
import profilePic from "../assets/1672909551721.jpeg";
import { useTranslation } from "next-i18next";
import { SearchInput } from "../components/shared/search-input";
import { SearchProvider } from "../provider/search.provider";
import { useSearchTerm } from "../hooks/useSearchTerm.hook";
import { useSearchFilter } from "../hooks/useSearchFilter";
import classNames from "classnames";
import { useIntersection } from "react-use";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

export interface Props {
  header: {
    headline: HeadlineProps;
    background: string;
    body?: React.ReactNode | string;
    buttons?: ButtonProps[];
    pills?: PillProps[];
  } & HeaderProps;
  skills?: SkillsProps[];
  showProfilePic?: boolean;
}

const MotionHeadline = motion(Headline, { forwardMotionProps: true });
const MotionBody = motion(HeadlineBody, { forwardMotionProps: true });
const MotionButton = motion(Button);

/**
 * An SkillsTemplate React Component.
 * @author Jane Will
 * @version 0.1
 */
const SkillsTemplateInner: React.FC<Props> = ({
  header: {
    src,
    className,
    headline,
    body,
    buttons,
    source,
    background,
    shadowDefault,
    pills,
  },
  skills,
  showProfilePic,
}) => {
  const headerRef = React.createRef<HTMLElement>();
  const scrollButtonRef = React.useRef<HTMLDivElement>(null);

  const { t } = useTranslation(["common"]);

  const { setSearchTerm } = useSearchTerm();

  const filteredSkills = useSearchFilter(skills);

  const intersection = useIntersection(headerRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  const { pathname, push } = useRouter();

  return (
    <div>
      <Header
        ref={headerRef}
        src={src}
        className={className}
        background={background}
        indicator={skills && <ScrollDownIndicator className="z-10" />}
        source={source}
        shadowDefault={shadowDefault}
      >
        {showProfilePic && (
          <ProfilePicture
            src={profilePic.src}
            blurDataURL={profilePic.blurDataURL}
            alt="Github Profile Picture"
            layout="fill"
          />
        )}
        <MotionHeadline
          headline={t("defaultHeadline", { ns: "common" })}
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
        {pills && pills?.length > 0 && (
          <motion.div
            variants={headlineShowUpAnimation}
            initial="hidden"
            animate="enter"
            className="flex flex-wrap mt-4 gap-2"
          >
            {pills.map((pillProps, index) => (
              <Pill key={index} {...pillProps} />
            ))}
          </motion.div>
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
            <div
              className={`flex ${classNames({
                "justify-between": skills.length > 1,
                "justify-center": skills.length <= 1,
              })} w-full mt-4 flex-col-reverse gap-4 lg:flex-row`}
            >
              {skills.length > 1 && (
                <div className="flex flex-wrap gap-2 max-w-screen-sm align-center">
                  {skills?.map(({ title }, i) => (
                    <Pill
                      key={i}
                      href={`/#${title.replaceAll(" ", "_").toLowerCase()}`}
                    >
                      {title}
                    </Pill>
                  ))}
                </div>
              )}
              <SearchInput
                onUpdate={({ search }) => {
                  setSearchTerm(search);
                }}
              />
            </div>
            {skills &&
              filteredSkills?.map((s, i) => (
                <Skills
                  key={i}
                  {...s}
                  id={s.title.replaceAll(" ", "_").toLowerCase()}
                />
              ))}
          </div>
        )}
      </main>
      {intersection && intersection?.intersectionRatio < 1 && (
        <div ref={scrollButtonRef} className="fixed bottom-4 right-4 z-50">
          <Pill
            onClick={async () => {
              window.scrollTo({ left: 0, top: 0, behavior: "smooth" });

              window.setTimeout(async () => {
                await push(pathname);
              }, 1000);
            }}
          >
            <ArrowUpCircleIcon className="w-6 h-6" />
          </Pill>
        </div>
      )}
    </div>
  );
};

export const SkillsTemplate: React.FC<Props> = (props) => {
  return (
    <SearchProvider>
      <SkillsTemplateInner {...props} />
    </SearchProvider>
  );
};
