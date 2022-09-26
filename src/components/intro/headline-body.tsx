import React from "react";

export interface Props {}

/**
 * An HeadlineBody React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
export const HeadlineBody: React.FC<Props> = () => {
  return (
    <p className="text-xl mt-4 max-w-md mx-auto text-gray-100">
      I had noticed that both in the very poor and very rich extremes of society
      the mad were often allowed to mingle freely
    </p>
  );
};
