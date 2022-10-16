import Link from "next/link";
import React from "react";

export interface Props {
  icon: React.ReactElement;
  href?: string;
  external?: boolean;
  "aria-label"?: string;
}

/**
 * An CardBubble React Component.
 * @author Jane Will
 * @version 0.1
 */
export const CardBubble: React.FC<Props> = ({
  icon,
  external,
  href,
  "aria-label": ariaLabel,
}) => {
  const res = (
    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-navy-500 text-white">
      {icon}
    </div>
  );

  if (!href) return res;

  if (!external) {
    return (
      <Link href={href}>
        <a aria-label={ariaLabel}>{res}</a>
      </Link>
    );
  }

  return (
    <a aria-label={ariaLabel} href={href} target="_blank" rel="noreferrer">
      {res}
    </a>
  );
};
