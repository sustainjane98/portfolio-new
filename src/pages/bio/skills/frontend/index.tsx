import { NextSeo } from "next-seo";
import React from "react";
import { SkillsTemplate } from "../../../../templates/skills.template";
import frontendImage from "../../../../assets/charlesdeluvio-pjAH2Ax4uWk-unsplash.jpg";
import { useRouter } from "next/router";
import ReactIcon from "../../../../assets/react-2.svg";
import AngularIcon from "../../../../assets/angular-icon-1.svg";
import TypescriptIcon from "../../../../assets/typescript.svg";
import CSS3Icon from "../../../../assets/css-3.svg";
import HTML5Icon from "../../../../assets/html-1.svg";

export interface Props {}

/**
 * An FrotendPage React Component.
 * @author
 * @version 0.1
 */
const FrotendPage: React.FC<Props> = () => {
  const { pathname } = useRouter();

  return (
    <>
      <NextSeo title="Frontend Skills" />
      <SkillsTemplate
        header={{
          headline: {
            headline: "My frontend Skills",
            subheadline: "I am a frontend developer",
          },
          body: " I burn for frontend development. I am particularly familiar with the following technologies in this area...",
          src: frontendImage,
        }}
        skills={{
          title: "Frontend Skills",
          skills: [
            {
              title: "React (Native)",
              description:
                "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
              href: `${pathname}/react`,
              icon: <ReactIcon className="w-6 h-6" />,
            },
            {
              title: "Angular",
              description:
                "Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.",
              href: "",
              icon: <AngularIcon className="w-6 h-6" />,
            },
            {
              title: "TypeScript",
              description:
                "TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript. As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.",
              href: `${pathname}/typescript`,
              icon: <TypescriptIcon className="w-6 h-6" />,
            },
            {
              title: "HTML5",
              description:
                "HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard. It is maintained by the Web Hypertext Application Technology Working Group (WHATWG), a consortium of the major browser vendors.",
              href: `${pathname}/html5`,
              icon: <HTML5Icon className="w-6 h-6" />,
            },
            {
              title: "CSS3",
              description:
                "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
              href: `${pathname}/css3`,
              icon: <CSS3Icon className="w-6 h-6" />,
            },
          ],
        }}
      />
    </>
  );
};

export default FrotendPage;
