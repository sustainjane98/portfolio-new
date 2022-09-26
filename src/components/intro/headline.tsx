import React from "react";

export interface Props {}

/**
 * An Headline React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
export const Headline: React.FC<Props> = () => {
  return (
    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
      <span className="block">Want to be millionaire ?</span>
      <span className="block text-navy-200 border-black">
        It&#x27;s today or never.
      </span>
    </h2>
  );
};
