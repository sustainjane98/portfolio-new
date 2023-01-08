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
      <Link href={href} className="pill pill-primary pill-selectable">
        <span>{children}</span>
      </Link>
    );
  else
    return (
      <div className="pill pill-primary">
        <span>{children}</span>
      </div>
    );
};
