import Link from "next/link";
import React from "react";

export interface Props {
  href?: string;
  children: string;
}

/**
 * An Pill React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Pill: React.FC<Props> = ({ href, children }) => {
  if (href)
    return (
      <Link
        href={href}
        className="text-white bg-navy-500 hover:bg-navy-600 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        <span>{children}</span>
      </Link>
    );
  else
    return (
      <div className="text-white bg-navy-500 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
        <span>{children}</span>
      </div>
    );
};
