import React from "react";
import { HeaderWithTwoSections } from "../components/bio/header-with-two-sections/header-with-two-sections";
import { Header, Props as HeaderProps } from "../components/shared/header";
import {
  Headline,
  Props as HeadlineProps,
} from "../components/shared/headline";
import {
  HeadlineBody,
  Props as HeadlineBodyProps,
} from "../components/shared/headline-body";
import { ScrollDownIndicator } from "../components/shared/scroll-down-indicator";
import { Skills, Props as SkillsProps } from "../components/shared/skills";
import { Button, Props as ButtonProps } from "../components/shared/button";

export interface Props {
  header: {
    headline: HeadlineProps;
    body?: string;
    buttons?: ButtonProps[];
  } & HeaderProps;
  skills?: SkillsProps;
}

/**
 * An SkillsTemplate React Component.
 * @author Jane Will
 * @version 0.1
 */
export const SkillsTemplate: React.FC<Props> = ({
  header: { src, className, headline, body, buttons },
  skills,
}) => {
  return (
    <>
      <Header src={src} className={className}>
        <Headline {...headline} />
        {body && <HeadlineBody>{body}</HeadlineBody>}
        {skills && <ScrollDownIndicator />}
        {buttons && (
          <div className="mt-6 inline-flex">
            {buttons.map((button, index) => (
              <Button key={index} {...button} />
            ))}
          </div>
        )}
      </Header>
      {skills && <Skills {...skills} />}
    </>
  );
};
