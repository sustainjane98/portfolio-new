import React from "react";

export interface Props {
  headline: string;
  subheadline: string;
}

/**
 * An Headline React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Headline: React.FC<Props> = ({ headline, subheadline }) => {
  return (
    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
      <span className="block">{headline}</span>
      <span className="block text-navy-200 border-black">{subheadline}</span>
    </h2>
  );
};
