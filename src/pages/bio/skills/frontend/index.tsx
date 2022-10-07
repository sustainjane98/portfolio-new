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
import SASSIcon from "../../../../assets/sass-1.svg";
import TailwindIcon from "../../../../assets/tailwind-css-2.svg";
import MaterialUiIcon from "../../../../assets/material-ui-1.svg";
import StorybookIcon from "../../../../assets/storybook-1.svg";
import NextJsIcon from "../../../../assets/next-js.svg";
import ReduxIcon from "../../../../assets/redux.svg";
import JestIcon from "../../../../assets/jest-2.svg";
import CypressIcon from "../../../../assets/cypress.svg";
import PlaywrightIcon from "../../../../assets/playwright-logo.svg";
import ReactHookFormIcon from "../../../../assets/react-hook-form.svg";
import FormikIcon from "../../../../assets/formik.svg";
import FramerMotionIcon from "../../../../assets/framer-motion.svg";
import HeadlessUIIcon from "../../../../assets/headless.svg";
import NrwlIcon from "../../../../assets/nrwl-logo-white.svg";
import NpmIcon from "../../../../assets/npm-square-red-1.svg";
import YarnIcon from "../../../../assets/yarn.svg";
import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";

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
              title: "Monorepo + Package Manager",
              description:
                "A monorepo is used by some development teams. While others use multiple repositories. A package manager or package-management system is a collection of software tools that automates the process of installing, upgrading, configuring, and removing computer programs for a computer in a consistent manner.",
              href: "https://nx.dev/",
              external: true,
              icon: <DocumentDuplicateIcon className="w-6 h-6" />,
              bubbles: [
                {
                  icon: <NrwlIcon className="w-6 h-6" />,
                  href: "https://nx.dev",
                  external: true,
                },
                {
                  icon: <NpmIcon className="w-6 h-6" />,
                  href: "https://nx.dev",
                  external: true,
                },
                {
                  icon: <YarnIcon className="w-6 h-6" />,
                  href: "https://nx.dev",
                  external: true,
                },
              ],
            },
            {
              title: "React (Native)",
              description:
                "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
              href: "https://reactjs.org/",
              icon: <ReactIcon className="w-6 h-6" />,
              bubbles: [
                {
                  icon: <StorybookIcon className="w-6 h-6" />,
                  href: "https://storybook.js.org/",
                  external: true,
                },
                {
                  icon: <NextJsIcon className="w-6 h-6" />,
                  href: "https://nextjs.org/",
                  external: true,
                },
                {
                  icon: <ReduxIcon className="w-6 h-6" />,
                  href: "https://redux.js.org/",
                  external: true,
                },
                {
                  icon: <ReactHookFormIcon className="w-6 h-6" />,
                  href: "https://react-hook-form.com/",
                  external: true,
                },
                {
                  icon: <FormikIcon className="w-6 h-6" />,
                  href: "https://formik.org/",
                  external: true,
                },
                {
                  icon: <FramerMotionIcon className="w-6 h-6" />,
                  href: "https://www.framer.com/motion/",
                  external: true,
                },
                {
                  icon: <HeadlessUIIcon className="w-6 h-6" />,
                  href: "https://headlessui.com/",
                  external: true,
                },
                {
                  icon: (
                    <div className="w-6 h-6 flex items-center justify-center">
                      <span className="font-bold text-white">TQ</span>
                    </div>
                  ),
                  href: "https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/",
                  external: true,
                },
              ],
              links: [
                {
                  description: "Example",
                  href: "https://github.com/jawil003/example-app",
                  external: true,
                },
              ],
            },
            {
              title: "Angular",
              description:
                "Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.",
              href: "https://angular.io/",
              external: true,
              icon: <AngularIcon className="w-6 h-6" />,
              bubbles: [
                {
                  icon: <StorybookIcon className="w-6 h-6" />,
                  href: "https://storybook.js.org/",
                  external: true,
                },
              ],
            },
            {
              title: "TypeScript",
              description:
                "TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript. As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.",
              href: "https://www.typescriptlang.org/",
              external: true,
              icon: <TypescriptIcon className="w-6 h-6" />,
              bubbles: [
                {
                  icon: (
                    <JestIcon className="w-16 h-16  relative right-1 top-1" />
                  ),
                  href: "https://jestjs.io/",
                  external: true,
                },
                {
                  icon: <CypressIcon className="w-6 h-6" />,
                  href: "https://cypress.io/",
                  external: true,
                },

                {
                  icon: <PlaywrightIcon className="w-8 h-8" />,
                  href: "https://playwright.dev/",
                  external: true,
                },
              ],
            },
            {
              title: "HTML5",
              description:
                "HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard. It is maintained by the Web Hypertext Application Technology Working Group (WHATWG), a consortium of the major browser vendors.",
              href: "https://html5.org/",
              external: true,
              icon: <HTML5Icon className="w-6 h-6" />,
              bubbles: [
                {
                  icon: (
                    <div className="flex justify-center items-center">
                      <span className="font-bold text-white">EJS</span>
                    </div>
                  ),
                  href: "https://ejs.co/",
                  external: true,
                },
              ],
            },
            {
              title: "CSS3",
              description:
                "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
              href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
              external: true,
              icon: <CSS3Icon className="w-6 h-6" />,
              bubbles: [
                { icon: <SASSIcon className="w-7 h-7" /> },
                { icon: <TailwindIcon className="w-6 h-6" /> },
                { icon: <MaterialUiIcon className="w-6 h-6" /> },
              ],
            },
          ],
        }}
      />
    </>
  );
};

export default FrotendPage;
