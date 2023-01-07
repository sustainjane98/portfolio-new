import React from "react";
import programmingBackground from "../../assets/radowan-nakif-rehan-cYyqhdbJ9TI-unsplash.webp";
import { ScrollDownIndicator } from "../shared/scroll-down-indicator";
import { SkillsTemplate } from "../../templates/skills.template";
import {
  DocumentDuplicateIcon,
  ServerIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { useTranslation } from "next-i18next";
import { Link } from "../shared/link";
import { StaticImageData } from "next/image";
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
import GolangIcon from "../../assets/golang-1.svg";
import KotlinIcon from "../../assets/kotlin-2.svg";
import ElixirIcon from "../../assets/elixir-1.svg";
import JavaIcon from "../../assets/java-14.svg";
import GinIcon from "../../assets/gin.svg";
import GooseIcon from "../../assets/goose_logo.svg";
import GraphQlIcon from "../../assets/graphql-logo-2.svg";
import HibenateIcon from "../../assets/hibernate-icon.svg";
import SpringIcon from "../../assets/spring-3.svg";
import FigmaIcon from "../../assets/figma-1.svg";
import AdobeXDIcon from "../../assets/adobe-xd-1.svg";
import AffinityIcon from "../../assets/affinity-1.svg";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import AtlassianIcon from "../../assets/atlassian-1.svg";
import JiraIcon from "../../assets/jira-1.svg";
import ConfluenceIcon from "../../assets/confluence-1.svg";
import BitbucketIcon from "../../assets/bitbucket-icon.svg";
import TeamsIcon from "../../assets/microsoft-teams-1.svg";
import MicrosoftIcon from "../../assets/microsoft-5.svg";
import OutlookIcon from "../../assets/outlook-1.svg";
import PowerpointIcon from "../../assets/powerpoint-2.svg";
import WordIcon from "../../assets/word-1.svg";
import ExcelIcon from "../../assets/excel-4.svg";
import SlackIcon from "../../assets/slack-1.svg";
import TestingLibaryIcon from "../../assets/octopus-128x128.svg";
const javaAndKotlin = [
  {
    icon: <HibenateIcon className="w-6 h-6" />,
    href: "https://hibernate.org/",
    external: true,
    "aria-label": "Hibernate Link",
  },
  {
    icon: <SpringIcon className="w-6 h-6" />,
    href: "https://spring.io/",
    external: true,
    "aria-label": "Spring Link",
  },
  {
    icon: (
      <div className="w-6 h-6 flex items-center justify-center">
        <span className="font-bold text-white">L</span>
      </div>
    ),
    href: "https://projectlombok.org/",
    external: true,
    "aria-label": "Project Lombok Link",
  },
];
export interface Props {
  githubProfileUrl: StaticImageData;
}

/**
 * An HeaderWithTwoSections React Component.
 * @author Jane Will
 * @version 0.1
 */
export const BiographyBody: React.FC<Props> = ({ githubProfileUrl }) => {
  const { t } = useTranslation(["whoAmI"]);

  return (
    <SkillsTemplate
      header={{
        headline: {
          headline: t("headline"),
          subheadline: t("subheadline"),
        },
        pills: [
          {
            children: t("skills.frontend.title"),
            href: `/#frontend`,
          },
          {
            children: t("skills.backend.title"),
            href: `/#backend`,
          },
          {
            children: t("skills.design.title"),
            href: `/#design`,
          },
          {
            children: t("skills.softwareTesting.title"),
            href: `/#software_testing`,
          },
          {
            children: t("skills.projectManagement.title"),
            href: `/#project_management`,
          },
        ],
        src: programmingBackground,
        source: {
          href: "https://unsplash.com/@radowanrehan",
          copyright: "Radowan Nakif Rehan",
        },
        body: (
          <>
            {t("body", { returnObjects: true })[0]}{" "}
            {
              <Link
                external
                target="_blank"
                rel="noreferrer"
                className="underline"
                href="https://transequality.org/issues/resources/frequently-asked-questions-about-transgender-people"
              >
                {t("body", { returnObjects: true })[1]}
              </Link>
            }{" "}
            {t("body", { returnObjects: true })[2]}
          </>
        ),
        indicator: <ScrollDownIndicator className="z-10" />,
        background: "bg-[#0c1116]",
      }}
      githubProfileUrl={githubProfileUrl}
      skills={[
        {
          title: t("skills.frontend.title"),
          skills: [
            {
              title: t("skills.monorepo.title"),
              description: t("skills.monorepo.description"),
              icon: <DocumentDuplicateIcon className="w-6 h-6" />,
              stars: 4,
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
              title: t("skills.react.title"),
              stars: 4,
              description: t("skills.react.description"),
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
                  description: t("skills.react.links.example"),
                  href: "https://github.com/jawil003/portfolio-new",
                  external: true,
                  "aria-label": "My Example React App Link",
                },
              ],
            },
            {
              title: t("skills.swift.title"),
              stars: 3,
              description: t("skills.swift.description"),
              href: "https://swift.org",
              icon: <SwiftIcon className="w-10 h-10" />,
              external: true,
              "aria-label": "Apple Swift Link",
            },
            {
              title: t("skills.angular.title"),
              stars: 2,
              description: t("skills.angular.description"),
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
              title: t("skills.typescript.title"),
              stars: 4,
              description: t("skills.typescript.description"),
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
              ],
            },
            {
              title: t("skills.html5.title"),
              stars: 4,
              description: t("skills.html5.description"),
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
              title: t("skills.css3.title"),
              stars: 4,
              description: t("skills.css3.description"),
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
        },
        {
          title: t("skills.backend.title"),
          skills: [
            {
              title: t("skills.golang.title"),
              stars: 4,
              description: t("skills.golang.description"),
              href: "https://go.dev/",
              icon: <GolangIcon className="w-8 h-8" />,
              external: true,
              "aria-label": "Golang Link",
              bubbles: [
                {
                  icon: <GinIcon className="w-7 h-7" />,
                  href: "https://github.com/gin-gonic/gin",
                  external: true,
                  "aria-label": "Gin Link",
                },
                {
                  icon: <GooseIcon className="w-8 h-8" />,
                  href: "https://github.com/pressly/goose",
                  external: true,
                  "aria-label": "Goose Link",
                },
              ],
            },
            {
              title: t("skills.kotlin.title"),
              stars: 3,
              description: t("skills.kotlin.description"),
              href: "https://kotlinlang.org/",
              icon: <KotlinIcon className="w-6 h-6" />,
              external: true,
              bubbles: javaAndKotlin,
              "aria-label": "Kotlin Link",
            },
            {
              title: t("skills.elixir.title"),
              stars: 3,
              description: t("skills.elixir.description"),
              href: "https://elixir-lang.org/",
              icon: <ElixirIcon className="w-10 h-10" />,
              external: true,
              "aria-label": "Elixir Link",
            },
            {
              title: t("skills.java.title"),
              stars: 4,
              description: t("skills.java.description"),
              href: "https://www.java.com/download/manual.jsp",
              icon: <JavaIcon className="w-8 h-8" />,
              external: true,
              bubbles: javaAndKotlin,
              "aria-label": "Java Link",
            },
            {
              title: t("skills.apiDesign.title"),
              stars: 4,
              description: t("skills.apiDesign.description"),
              icon: <ServerIcon className="w-8 h-8" />,
              bubbles: [
                {
                  icon: (
                    <div>
                      <span>Rest</span>
                    </div>
                  ),
                  external: true,
                  href: "https://www.codecademy.com/article/what-is-rest",
                  "aria-label": "Representational State Transfer Link",
                },
                {
                  icon: <GraphQlIcon className="w-8 h-8" />,
                  external: true,
                  href: "https://graphql.org/",
                  "aria-label": "GraphQl Link",
                },
              ],
            },
          ],
        },
        {
          title: t("skills.design.title"),
          skills: [
            {
              title: t("skills.figma.title"),
              stars: 4,
              description: t("skills.figma.description"),
              href: "https://www.figma.com/",
              external: true,
              icon: <FigmaIcon className="w-6 h-6" />,
              "aria-label": "Figma Link",
            },
            {
              title: t("skills.adobeXd.title"),
              stars: 2,
              description: t("skills.adobeXd.description"),
              href: "https://www.adobe.com/products/xd.html",
              external: true,
              icon: <AdobeXDIcon className="w-8 h-8" />,
              "aria-label": "Adobe XD Link",
            },
            {
              title: t("skills.affinity.title"),
              stars: 3,
              description: t("skills.affinity.description"),
              href: "https://affinity.serif.com/",
              external: true,
              icon: <AffinityIcon className="w-8 h-8 fill-white" />,
              "aria-label": "Affinity Suite Link",
            },
            {
              title: t("skills.dui.title"),
              stars: 3,
              description: t("skills.dui.description"),
              href: "https://designingui.com/",
              external: true,
              icon: <BookOpenIcon className="w-8 h-8 fill-white" />,
              "aria-label": "Designing User Interfaces Book Link",
            },
          ],
        },
        {
          title: t("skills.softwareTesting.title"),
          skills: [
            {
              title: t("skills.playwright.title"),
              stars: 4,
              description: t("skills.playwright.description"),
              icon: <PlaywrightIcon className="w-6 h-6" />,
              "aria-label": "Playwright Link",
              external: true,
              href: "https://playwright.dev/",
            },
            {
              title: t("skills.cypress.title"),
              stars: 4,
              description: t("skills.cypress.description"),
              icon: <CypressIcon className="w-6 h-6" />,
              "aria-label": "Cypress Link",
              external: true,
              href: "https://docs.cypress.io/guides/overview/why-cypress",
            },
            {
              title: t("skills.testingLibary.title"),
              stars: 3,
              description: t("skills.testingLibary.description"),
              icon: <TestingLibaryIcon className="w-6 h-6" />,
              "aria-label": "(React) Testing Link",
              external: true,
              href: "https://testing-library.com/",
            },
            {
              title: t("skills.jest.title"),
              stars: 3,
              description: t("skills.jest.description"),
              icon: <JestIcon className="w-20 h-20" />,
              "aria-label": "Jest Link",
              external: true,
              href: "https://jestjs.io/",
            },
            {
              title: t("skills.junit.title"),
              stars: 3,
              description: t("skills.junit.description"),
              icon: <JestIcon className="w-20 h-20" />,
              "aria-label": "JUnit Link",
              external: true,
              href: "https://junit.org",
            },
          ],
        },
        {
          title: t("skills.projectManagement.title"),
          skills: [
            {
              title: t("skills.scrum.title"),
              stars: 4,
              description: t("skills.scrum.description"),
              icon: <UsersIcon className="w-6 h-6 fill-white" />,
              href: "https://www.scrum.org/resources/what-is-scrum",
              external: true,
              "aria-label": "Scrum Link",
            },
            {
              title: t("skills.atlassian.title"),
              stars: 4,
              description: t("skills.atlassian.description"),
              icon: <AtlassianIcon className="w-8 h-8" />,
              bubbles: [
                {
                  icon: <JiraIcon className="w-6 h-6" />,
                  href: "https://www.atlassian.com/jira",
                  external: true,
                  "aria-label": "Atlassian Jira Link",
                },
                {
                  icon: <BitbucketIcon className="w-6 h-6" />,
                  href: "https://www.atlassian.com/bitbucket",
                  external: true,
                  "aria-label": "Atlassian Bitbucket Link",
                },
                {
                  icon: <ConfluenceIcon className="w-6 h-6" />,
                  href: "https://www.atlassian.com/confluence",
                  external: true,
                  "aria-label": "Atlassian Confluence Link",
                },
              ],
            },
            {
              title: t("skills.office.title"),
              stars: 3,
              description: t("skills.office.description"),
              icon: <MicrosoftIcon className="w-6 h-6" />,
              bubbles: [
                {
                  icon: <TeamsIcon className="w-6 h-6" />,
                  href: "https://www.microsoft.com/teams",
                  external: true,
                  "aria-label": "Microsoft Teams Link",
                },
                {
                  icon: <WordIcon className="w-6 h-6" />,
                  href: "https://www.microsoft.com/word",
                  external: true,
                  "aria-label": "Microsoft Word Link",
                },
                {
                  icon: <OutlookIcon className="w-6 h-6" />,
                  href: "https://www.microsoft.com/outlook",
                  external: true,
                  "aria-label": "Microsoft Outlook Link",
                },
                {
                  icon: <PowerpointIcon className="w-6 h-6" />,
                  href: "https://www.microsoft.com/powerpoint",
                  external: true,
                  "aria-label": "Microsoft PowerPoint Link",
                },
                {
                  icon: <ExcelIcon className="w-6 h-6" />,
                  href: "https://www.microsoft.com/excel",
                  external: true,
                  "aria-label": "Microsoft Excel Link",
                },
              ],
            },
            {
              title: t("skills.slack.title"),
              stars: 4,
              description: t("skills.slack.description"),
              icon: <SlackIcon className="w-6 h-6" />,
              href: "https://www.slack.com/",
              external: true,
              "aria-label": "Slack Messenger Link",
            },
          ],
        },
      ]}
    />
  );
};
