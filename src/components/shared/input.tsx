import React from "react";
import { useFormContext } from "react-hook-form";

export interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  className?: string;
  name: string;
  required?: boolean;
}

/**
 * An Input React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Input: React.FC<Props> = ({ label, className, ...inputprops }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const isError = errors?.[inputprops?.name]?.message ?? false;
  const errorMessage = (errors?.[inputprops?.name]?.message ?? "") as string;

  return (
    <div className="mb-6">
      <div className={className}>
        <label
          htmlFor="email"
          className={`block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300`}
        >
          {label}
          {inputprops.required ? "*" : ""}
        </label>
        <input
          {...inputprops}
          {...register(inputprops.name)}
          className={`bg-gray-50 border focus:ring-2 ${
            !isError
              ? "border-gray-300 focus:border-navy-500 focus:ring-navy-500"
              : "border-red-300 focus:border-red-500 focus:ring-red-500"
          } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        />
      </div>
      {isError && (
        <span className="text-xs font-light text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};
