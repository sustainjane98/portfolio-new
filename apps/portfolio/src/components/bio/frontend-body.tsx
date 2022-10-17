import React from "react";
import ReactIcon from "../../assets/react-2.svg";
import AngularIcon from "../../assets/angular-icon-1.svg";
import TypescriptIcon from "../../assets/typescript.svg";
import CSS3Icon from "../../assets/css-3.svg";
import HTML5Icon from "../../assets/html-1.svg";
import SASSIcon from "../../assets/sass-1.svg";
import TailwindIcon from "../../assets/tailwind-css-2.svg";
import MaterialUiIcon from "../../assets/material-ui-1.svg";
import StorybookIcon from "../../assets/storybook-1.svg";
import NextJsIcon from "../../assets/next-js.svg";
import ReduxIcon from "../../assets/redux.svg";
import JestIcon from "../../assets/jest-2.svg";
import CypressIcon from "../../assets/cypress.svg";
import PlaywrightIcon from "../../assets/playwright-logo.svg";
import ReactHookFormIcon from "../../assets/react-hook-form.svg";
import FormikIcon from "../../assets/formik.svg";
import FramerMotionIcon from "../../assets/framer-motion.svg";
import HeadlessUIIcon from "../../assets/headless.svg";
import NrwlIcon from "../../assets/nrwl-logo-white.svg";
import NpmIcon from "../../assets/npm-square-red-1.svg";
import YarnIcon from "../../assets/yarn.svg";
import SwiftIcon from "../../assets/swift-15.svg";
import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import { SkillsTemplate } from "../../templates/skills.template";
import frontendImage from "../../assets/charlesdeluvio-pjAH2Ax4uWk-unsplash.webp";

export interface Props {}

/**
 * An FrontendBody React Component.
 * @author Jane Will
 * @version 0.1
 */
export const FrontendBody: React.FC<Props> = () => {
  return (
    <SkillsTemplate
      header={{
        headline: {
          headline: "My frontend Skills",
          subheadline: "I am a frontend developer",
        },
        body: " I burn for frontend development. I am particularly familiar with the following technologies in this area...",
        src: frontendImage,
        source: {
          href: "https://unsplash.com/@charlesdeluvio",
          copyright: "charlesdeluvio",
        },
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
                "aria-label": "Nrwl Nx Monorepo Manager Link",
              },
              {
                icon: <NpmIcon className="w-6 h-6" />,
                href: "https://www.npmjs.com/",
                external: true,
                "aria-label": "Node.js Package Manager Link",
              },
              {
                icon: <YarnIcon className="w-6 h-6" />,
                href: "https://yarnpkg.com/",
                external: true,
                "aria-label": "Yarn Package Manager Link",
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
                "aria-label": "Storybook Link",
              },
              {
                icon: <NextJsIcon className="w-6 h-6" />,
                href: "https://nextjs.org/",
                external: true,
                "aria-label": "Next.js Link",
              },
              {
                icon: <ReduxIcon className="w-6 h-6" />,
                href: "https://redux.js.org/",
                external: true,
                "aria-label": "Redux Link",
              },
              {
                icon: <ReactHookFormIcon className="w-6 h-6" />,
                href: "https://react-hook-form.com/",
                external: true,
                "aria-label": "React Hook Form Link",
              },
              {
                icon: <FormikIcon className="w-6 h-6" />,
                href: "https://formik.org/",
                external: true,
                "aria-label": "Formik Link",
              },
              {
                icon: <FramerMotionIcon className="w-6 h-6" />,
                href: "https://www.framer.com/motion/",
                external: true,
                "aria-label": "Framer Motion Link",
              },
              {
                icon: <HeadlessUIIcon className="w-6 h-6" />,
                href: "https://headlessui.com/",
                external: true,
                "aria-label": "Headless UI Link",
              },
              {
                icon: (
                  <div className="w-6 h-6 flex items-center justify-center">
                    <span className="font-bold text-white">TQ</span>
                  </div>
                ),
                href: "https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/",
                external: true,
                "aria-label": "React Query Link",
              },
            ],
            links: [
              {
                description: "Example",
                href: "https://github.com/jawil003/example-app",
                external: true,
                "aria-label": "My Example React App Link",
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
            "aria-label": "Apple Swift Link",
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
                "aria-label": "Storybook Link",
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
                "aria-label": "Jest Link",
              },
              {
                icon: <CypressIcon className="w-6 h-6" />,
                href: "https://cypress.io/",
                external: true,
                "aria-label": "Cypress Link",
              },

              {
                icon: <PlaywrightIcon className="w-8 h-8" />,
                href: "https://playwright.dev/",
                external: true,
                "aria-label": "Playwright Link",
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
                "aria-label": "EJS Link",
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
              {
                icon: <SASSIcon className="w-7 h-7" />,
                href: "https://sass-lang.com/",
                external: true,
                "aria-label": "SASS Link",
              },
              {
                icon: <TailwindIcon className="w-6 h-6" />,
                href: "https://tailwindcss.com/",
                external: true,
                "aria-label": "Tailwind Link",
              },
              {
                icon: <MaterialUiIcon className="w-6 h-6" />,
                href: "https://mui.com/",
                external: true,
                "aria-label": "Material UI Link",
              },
            ],
          },
        ],
      }}
    />
  );
};
