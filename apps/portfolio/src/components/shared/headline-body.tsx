import React, { PropsWithChildren } from "react";

export interface Props {
  children: PropsWithChildren["children"];
}

/**
 * An HeadlineBody React Component.
 * @author Jane Will
 * @version 0.1
 */
export const HeadlineBody = React.forwardRef<HTMLParagraphElement, Props>(
  ({ children }, ref) => {
    return (
      <p ref={ref} className="text-xl mt-4 max-w-md  text-gray-100">
        {children}
      </p>
    );
  }
);

HeadlineBody.displayName = "HeadlineBody";
