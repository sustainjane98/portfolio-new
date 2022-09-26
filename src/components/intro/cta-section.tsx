import Link from "next/link";
import React from "react";

export interface Props {}

/**
 * An CTASection React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
export const CTASection: React.FC<Props> = () => {
  return (
    <div>
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">
            I am the caterpillar that became a butterfly
          </span>
          <span className="block text-blue-400 border-black">
            I build web pages with passion
          </span>
        </h2>
        <p className="text-xl mt-4 max-w-md mx-auto text-gray-100">
          I am a software developer, with the misson to realize beautiful and
          functional web applications. If you like, we can get to know each
          other better
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <Link href={"/bio"}>
              <a
                type="button"
                className="py-4 px-6  bg-navy-600 hover:bg-navy-700 focus:ring-navy-700 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Get to know me
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
