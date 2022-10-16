import React from "react";
import LinkComp from "next/link";

export interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  external?: boolean;
  href: string;
  noUnderline?: boolean;
}

/**
 * An Link React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Link: React.FC<Props> = ({
  children,
  external,
  noUnderline,
  ...anchorProps
}) => {
  const anchor = (
    <a {...anchorProps} href={external ? undefined : anchorProps.href}>
      <span className={noUnderline ? "" : "underline"}>{children}</span>
    </a>
  );

  if (external)
    return (
      <LinkComp passHref href={anchorProps.href}>
        {anchor}
      </LinkComp>
    );

  return anchor;
};