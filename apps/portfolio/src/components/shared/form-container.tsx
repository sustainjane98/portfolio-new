import { Button } from "mailgen";
import React, { PropsWithChildren } from "react";

export interface Props extends PropsWithChildren {
  title: string;
  className?: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  button: React.ReactElement<Button>;
}

/**
 * An FormContainer React Component.
 * @author Jane Will
 * @version 0.1
 */
export const FormContainer: React.FC<Props> = ({
  title,
  className,
  children,
  onSubmit,
  button,
}) => {
  return (
    <form
      noValidate
      className={`flex w-full max-w-4xl space-x-3 ${className}`}
      onSubmit={onSubmit}
    >
      <div className="relative w-full p-10 m-auto mt-10 bg-white rounded-md shadow dark:bg-gray-800">
        <h1 className="mb-6 text-2xl font-medium text-center text-gray-800 dark:text-white">
          {title}
        </h1>
        <div className={`m-auto`}>
          {children}
          <div className="col-span-2 text-right">{button}</div>
        </div>
      </div>
    </form>
  );
};

FormContainer.defaultProps = {};
