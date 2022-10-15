import Link from "next/link";
import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

export interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  href?: string;
  onClick?: () => void;
  children: string;
  isLoading?: boolean;
}

/**
 * An Button React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Button: React.FC<Props> = ({
  href,
  onClick,
  children,
  isLoading,
  ...buttonProps
}) => {
  const isDisabled = isLoading || buttonProps.disabled;

  const classes = `py-4 px-6  ${
    !isDisabled
      ? "bg-navy-600 hover:bg-navy-700 focus:ring-navy-700 focus:ring-offset-indigo-200"
      : "bg-gray-300"
  } text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg`;

  if (href)
    return (
      <Link href={href}>
        <a aria-label={children} className={classes}>
          <span>{children}</span>
        </a>
      </Link>
    );
  return (
    <button
      aria-label={children}
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
};

Button.defaultProps = { isLoading: false };
