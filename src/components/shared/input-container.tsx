import React from "react";
import { useFormContext } from "../../hooks/useFormContext.hook";
import { ErrorMessage } from "./error-message";

export interface Props
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
  className?: string;
  name: string;
  required?: boolean;
}

/**
 * An InputContainer React Component.
 * @author Jane Will
 * @version 0.1
 */
export const InputContainer: React.FC<Props> = ({
  className,
  label,
  ...inputProps
}) => {
  const {
    register,
    formState: { errorMessage, isError },
  } = useFormContext(inputProps.name);

  return (
    <div className={`mb-6 ${className} w-full h-full relative`}>
      <div className="w-full h-full relative flex flex-col">
        <label
          htmlFor="email"
          className={`block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300`}
        >
          {label}
          {inputProps.required ? "*" : ""}
        </label>
        <textarea
          {...inputProps}
          {...register(inputProps.name)}
          className={`resize-none w-full flex-1 xl:mb-6 bg-gray-50 border focus:ring-2 outline-none focus:border-navy-500 focus:ring-navy-500 ${
            !isError ? "border-gray-300" : "border-red-300"
          } text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        />
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};
