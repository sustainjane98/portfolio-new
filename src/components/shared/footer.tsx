import Link from "next/link";
import React from "react";
import { main } from "../../config/navigation-links";
import GetInItLogo from "../../assets/get-in-it.svg";
import GithubLogo from "../../assets/github-icon-transp.svg";

export interface Props {}

/**
 * An Footer React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Footer: React.FC<Props> = () => {
  return (
    <footer className="text-gray-600 dark:text-white body-font">
      <div className="container py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 dark:text-white tracking-widest text-sm mb-3">
              Main
            </h2>
            <nav className="list-none mb-10">
              {main
                ?.filter(({ subItems }) => !subItems)
                .map(({ href, children }, index) => (
                  <li key={index}>
                    <Link href={href}>
                      <a className="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300">
                        {children}
                      </a>
                    </Link>
                  </li>
                ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 dark:text-white">
              Skills
            </h2>
            <nav className="list-none mb-10">
              {main
                .find(({ children }) => {
                  return children === "Skills";
                })
                ?.subItems?.map(({ href, children }, index) => (
                  <li key={index}>
                    <Link href={href}>
                      <a className="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300">
                        {children}
                      </a>
                    </Link>
                  </li>
                ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 dark:text-white tracking-widest text-sm mb-3">
              Other
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={"/impressum"}>
                  <a className="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300">
                    Impressum
                  </a>
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 pb-ios-4">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 dark:text-gray-200 text-sm text-center sm:text-left">
            © 2022 Jane Will —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-200 ml-1"
              target="_blank"
            >
              @sustainjane98
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              href={"https://github.com/jawil003"}
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo className="w-18 h-6 ml-3 fill-gray-500 dark:fill-gray-200" />
            </a>
            <a
              href={
                "https://www.get-in-it.de/profil/XjtwpO5JPtgzOK9Ru5dT7ADDJHHc8NsW"
              }
              target="_blank"
              rel="noreferrer"
            >
              <GetInItLogo className="w-18 h-6 ml-3 fill-gray-500 dark:fill-gray-200" />
            </a>
            <a
              className="ml-3 text-gray-500 dark:text-gray-200"
              href={"https://www.linkedin.com/in/jannik-will-450564182/"}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
