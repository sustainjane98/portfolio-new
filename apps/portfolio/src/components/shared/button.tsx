import Link from "next/link";
import React from "react";
import SyncLoader from "react-spinners/SyncLoader";
import classNames from "classnames";

export interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  href?: string;
  onClick?: () => void;
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "red";
}

/**
 * An Button React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ href, onClick, children, isLoading, variant, ...buttonProps }, ref) => {
    const isDisabled = isLoading || buttonProps.disabled;

    const classes = classNames(
      { "bg-gray-300": !isDisabled, [`button-${variant}`]: true },
      "button",
      "justify-center items-center"
    );

    if (href)
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          aria-label={children as string}
          className={classes}
        >
          <span>{children}</span>
        </Link>
      );
    return (
      <button
        ref={ref as React.LegacyRef<HTMLButtonElement>}
        aria-label={children as string}
        onClick={onClick}
        {...buttonProps}
        disabled={isDisabled}
        className={classes + " flex " + buttonProps?.className ?? ""}
      >
        <div className="flex-1 inline-block" />
        <span>{children}</span>
        <div className="flex-1 inline-flex justify-start">
          {isLoading && <SyncLoader size={8} color="white" className="ml-4" />}
        </div>
      </button>
    );
  }
);

Button.defaultProps = { isLoading: false, variant: "primary" };
Button.displayName = "Button";
