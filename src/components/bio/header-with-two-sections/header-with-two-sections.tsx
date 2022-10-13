import React from "react";
import { Header } from "../../shared/header";
import programmingBackground from "../../../assets/radowan-nakif-rehan-cYyqhdbJ9TI-unsplash.webp";
import { Headline } from "../../shared/headline";
import { HeadlineBody } from "../../shared/headline-body";
import { ScrollDownIndicator } from "../../shared/scroll-down-indicator";
import Link from "next/link";
import { ProfilePicture } from "../../shared/profilePicture";
import { useGithubProfile } from "../../../hooks/useGithubProfile.hook";

export interface Props {}

/**
 * An HeaderWithTwoSections React Component.
 * @author Jane Will
 * @version 0.1
 */
export const HeaderWithTwoSections: React.FC<Props> = () => {
  const { data, isFetched } = useGithubProfile("jawil003");

  if (isFetched)
    return (
      <div>
        <Header src={programmingBackground} className="bg-[#0c1116]">
          <ProfilePicture
            alt="Github Profile Picture"
            src={data?.avatar_url ?? ""}
            layout="fill"
          />
          <Headline
            headline="I am Jane"
            subheadline="I am a software developer"
          />
          <HeadlineBody>
            I am a{" "}
            {
              <a
                target="_blank"
                rel="noreferrer"
                className="underline"
                href="https://transequality.org/issues/resources/frequently-asked-questions-about-transgender-people"
              >
                trans woman
              </a>
            }{" "}
            and full-stack developer who is on fire for frontend development. I
            am particularly familiar with the following technologies...
          </HeadlineBody>
        </Header>
        <ScrollDownIndicator className="z-10" />
      </div>
    );
  return null;
};
