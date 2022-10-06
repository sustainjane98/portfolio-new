import Link from "next/link";
import React from "react";
import { main } from "../../config/navigation-links";

export interface Props {}

/**
 * An Footer React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Footer: React.FC<Props> = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Main
            </h2>
            <nav className="list-none mb-10">
              {main
                ?.filter(({ subItems }) => !subItems)
                .map(({ href, children }, index) => (
                  <li key={index}>
                    <Link href={href}>
                      <a className="text-gray-600 hover:text-gray-800">
                        {children}
                      </a>
                    </Link>
                  </li>
                ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
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
                      <a className="text-gray-600 hover:text-gray-800">
                        {children}
                      </a>
                    </Link>
                  </li>
                ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 pb-ios-4">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2022 Jane Will —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @sustainjane98
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              className="ml-3 text-gray-500"
              href={"https://www.linkedin.com/in/jannik-will-450564182/"}
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
