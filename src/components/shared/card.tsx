import React from "react";
import Link from "next/link";

export interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

/**
 * An Card React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
export const Card: React.FC<Props> = ({ description, title, icon, href }) => {
  return (
    <div className="inline-grid grid-rows-[auto_auto_minmax(auto,_100%)_auto] w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
      <div className="flex-shrink-0">
        <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-navy-500 text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
        {title}
      </h3>
      <p className="text-md  text-gray-500 dark:text-gray-300 py-4 text-start">
        {description}
      </p>

      <Link href={href} passHref>
        <a>
          <span className="underline text-navy-500 hover:text-navy-600 visited:navy-800">
            Learn more
          </span>
        </a>
      </Link>
    </div>
  );
};
