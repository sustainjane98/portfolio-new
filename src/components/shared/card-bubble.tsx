import Link from "next/link";
import React from "react";

export interface Props {
  icon: React.ReactElement;
  href?: string;
  external?: boolean;
}

/**
 * An CardBubble React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
export const CardBubble: React.FC<Props> = ({ icon, external, href }) => {
  const res = (
    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-navy-500 text-white">
      {icon}
    </div>
  );

  if (!href) return res;

  if (!external) {
    return (
      <Link href={href}>
        <a>{res}</a>
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer">
      {res}
    </a>
  );
};
