import Link from "next/link";
import React from "react";

export interface Props {
  href?: string;
  onClick?: () => void;
  children: string;
}

/**
 * An Button React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Button: React.FC<Props> = ({ href, onClick, children }) => {
  const classes =
    "py-4 px-6  bg-navy-600 hover:bg-navy-700 focus:ring-navy-700 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ";

  if (href)
    return (
      <Link href={href}>
        <a className={classes}>
          <span>{children}</span>
        </a>
      </Link>
    );
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
