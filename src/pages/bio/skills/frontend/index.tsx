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
import SwiftIcon from "../../../assets/swift-15.svg";
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
                "In my activities I use both the npm and the yarn package manager, for adding external dependencies. In larger projects I have already used the nrwl nx monorepo manager.",
              icon: <DocumentDuplicateIcon className="w-6 h-6" />,
              bubbles: [
                {
                  icon: <NrwlIcon className="w-6 h-6" />,
                  href: "https://nx.dev",
                  external: true,
                },
                {
                  icon: <NpmIcon className="w-6 h-6" />,
                  href: "https://www.npmjs.com/",
                  external: true,
                },
                {
                  icon: <YarnIcon className="w-6 h-6" />,
                  href: "https://yarnpkg.com/",
                  external: true,
                },
              ],
            },
            {
              title: "React (Native)",
              description:
                "In my practical work, I have gained extensive knowledge of the React library. I use only modern techniques, such as hooks and functional components. I also have knowledge about common libraries in the React cosmos.",
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
              title: "Swift",
              description:
                "I have been exposed to the Swift programming language mainly in the area of native app development and used it in a private project. However, the language is also very suitable for the development of backend applications.",
              href: "https://swift.org",
              icon: <SwiftIcon className="w-10 h-10" />,
              external: true,
            },
            {
              title: "Angular",
              description:
                "Besides my knowledge of React, I also gained knowledge of Angular Framework for employment and actively used it.",
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
                "I got involved with TypeScript because JavaScript didn't appeal to me due to the lack of typing. I have used TypeScript in various web applications privately and in employment. So I have a lot of experience and prefer it as a programming language for frontend applications.",
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
                "The language for the structural design of web applications is HTML. So I use this for all my applications and prefer the modern HTML5 standard. I am also familiar with various template engines.",
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
                "For the implementation of design specifications I use CSS. This allows in the specification CSS3 a precise implementation of different user interface designs. In addition, I am familiar with various tools that allow better style structuring",
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
