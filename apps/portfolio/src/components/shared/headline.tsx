import React from "react";

export interface Props {
  headline?: string;
  subheadline?: string;
}

/**
 * An Headline React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Headline = React.forwardRef<HTMLHeadingElement, Props>(
  ({ headline, subheadline }, ref) => {
    return (
      <h1 ref={ref} className="text-3xl font-extrabold text-white sm:text-4xl">
        {headline && <span className="block">{headline}</span>}
        {subheadline && (
          <span className="block text-navy-200 border-black">
            {subheadline}
          </span>
        )}
      </h1>
    );
  }
);

Headline.displayName = "Headline";
