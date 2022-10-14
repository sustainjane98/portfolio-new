import React, { PropsWithChildren } from "react";

export interface Props {
  className?: string;
}

/**
 * An CardContainer React Component.
 * @author Jane Will
 * @version 0.1
 */
export const CardContainer: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`flex flex-wrap justify-center items-stretch text-center gap-8 ${className}`}
    >
      {children}
    </div>
  );
};
