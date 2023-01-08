import classNames from "classnames";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

export interface Props extends PropsWithChildren {
  href?: string;
  onClick?: () => void;
  smoothScroll?: boolean;
}

/**
 * An Pill React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Pill: React.FC<Props> = ({ href, children, onClick }) => {
  if (href)
    return (
      <Link
        href={href}
        className="pill pill-primary pill-selectable h-min cursor-pointer"
        scroll={false}
      >
        <span>{children}</span>
      </Link>
    );
  else
    return (
      <div
        onClick={onClick}
        className={classNames("pill pill-primary h-min", {
          "cursor-pointer": !!onClick,
        })}
      >
        <span>{children}</span>
      </div>
    );
};
