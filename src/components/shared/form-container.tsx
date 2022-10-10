import React, { PropsWithChildren } from "react";

export interface Props extends PropsWithChildren {
  title: string;
  className?: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
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
}) => {
  return (
    <form
      noValidate
      className={`flex w-full max-w-4xl space-x-3 ${className}`}
      onSubmit={onSubmit}
    >
      <div className="relative w-full p-10 m-auto mt-10 bg-white rounded-md shadow dark:bg-gray-800">
        <div className="mb-6 text-2xl font-medium text-center text-gray-800 dark:text-white">
          {title}
        </div>
        <div className={`m-auto`}>
          {children}
          <div className="col-span-2 text-right">
            <button
              type="submit"
              className="py-2 px-4  bg-navy-600 hover:bg-navy-700 focus:ring-navy-500 focus:ring-offset-navy-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

FormContainer.defaultProps = {};
