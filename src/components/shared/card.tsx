import React from "react";
import Link from "next/link";
import { CardBubble, Props as CardBubbleProps } from "./card-bubble";
import { CardReact, CardRect } from "./card-rect";

export interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  external?: boolean;
  bubbles?: CardBubbleProps[];
}

/**
 * An Card React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
export const Card: React.FC<Props> = ({
  description,
  title,
  icon,
  href,
  external,
  bubbles,
}) => {
  return (
    <div
      className={`inline-grid ${
        bubbles
          ? "grid-rows-[auto_auto_auto_minmax(auto,_100%)_auto]"
          : "grid-rows-[auto_auto_minmax(auto,_100%)_auto]"
      } w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg`}
    >
      <div className="flex-shrink-0">
        <CardRect icon={icon} />
      </div>
      <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold py-4">
        {title}
      </h3>
      <p className="text-md  text-gray-500 py-4 text-start">{description}</p>
      {bubbles && (
        <div className="flex justify-center content-start pb-6 gap-2 flex-wrap px-6">
          {bubbles.map((props, index) => (
            <CardBubble key={index} {...props} />
          ))}
        </div>
      )}

      {external ? (
        <a href={href} target={"_blank"} rel="noreferrer">
          <span className="underline text-navy-500 hover:text-navy-600 visited:navy-800">
            Learn more
          </span>
        </a>
      ) : (
        <Link href={href} passHref>
          <a>
            <span className="underline text-navy-500 hover:text-navy-600 visited:navy-800">
              Learn more
            </span>
          </a>
        </Link>
      )}
    </div>
  );
};
