import React from "react";
import { Header } from "../components/shared/header";
import houseImage from "../assets/vu-anh-TiVPTYCG_3E-unsplash.jpg";
import { Headline } from "../components/shared/headline";
import { HeadlineBody } from "../components/shared/headline-body";
import { CardRect } from "../components/shared/card-rect";
import LinkedInIcon from "../assets/linkedin-icon-2.svg";
import GithubIcon from "../assets/github-icon-1.svg";

export interface Props {}

/**
 * An Impressum React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
const Impressum: React.FC<Props> = () => {
  return (
    <Header src={houseImage} className="bg-[#2b211c]">
      <Headline headline="Impressum" subheadline="Who own the site" />
      <HeadlineBody>
        Jannik Will <br />
        Ostkirchstraße 23 <br />
        44269 Dortmund
      </HeadlineBody>
      <div className="flex flex-row gap-2 items-start justify-start mt-4">
        <a
          href="https://www.linkedin.com/in/jannik-will-450564182/"
          target="_blank"
          rel="noreferrer"
        >
          <CardRect
            icon={<LinkedInIcon className="w-6 h-6" />}
            disableAutoPlace
          />
        </a>
        <a href="https://github.com/jawil003" target="_blank" rel="noreferrer">
          <CardRect
            icon={<GithubIcon className="w-6 h-6" />}
            disableAutoPlace
          />
        </a>
      </div>
    </Header>
  );
};

export default Impressum;
