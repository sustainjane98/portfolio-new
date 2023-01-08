import Link from "next/link";
import React, { PropsWithChildren } from "react";

export interface Props {
  href?: string;
  onClick?: () => void;
  smoothScroll?: boolean;
}

/**
 * An Pill React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Pill: React.FC<PropsWithChildren<Props>> = ({
  href,
  children,
  onClick,
}) => {
  if (href)
    return (
      <Link
        href={href}
        className="pill pill-primary pill-selectable"
        scroll={false}
      >
        <span>{children}</span>
      </Link>
    );
  else
    return (
      <div onClick={onClick} className="pill pill-primary">
        <span>{children}</span>
      </div>
    );
};
