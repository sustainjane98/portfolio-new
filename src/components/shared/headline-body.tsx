import React, { PropsWithChildren } from "react";

export interface Props {}

/**
 * An HeadlineBody React Component.
 * @author Jane Will
 * @version 0.1
 */
export const HeadlineBody: React.FC<PropsWithChildren> = ({ children }) => {
  return <p className="text-xl mt-4 max-w-md  text-gray-100">{children}</p>;
};
