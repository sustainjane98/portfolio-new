import React from "react";

export interface Props {
  children: string;
}

/**
 * An ErrorMessage React Component.
 * @author Jane Will
 * @version 0.1
 */
export const ErrorMessage: React.FC<Props> = ({ children }) => {
  return <span className="text-xs font-light text-red-500">{children}</span>;
};
