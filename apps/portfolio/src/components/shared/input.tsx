import React from "react";
import { useFormContext } from "../../hooks/useFormContext.hook";
import { ErrorMessage } from "./error-message";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { BackspaceIcon } from "@heroicons/react/24/outline";
export interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  className?: string;
  name: string;
  required?: boolean;
  variant?: "standard" | "search";
  clearable?: boolean;
}

/**
 * An Input React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Input: React.FC<Props> = ({
  label,
  className,
  variant,
  clearable,
  ...inputprops
}) => {
  const {
    register,
    formState: { isError, errorMessage },
    setValue,
  } = useFormContext(inputprops.name);

  const r = register(inputprops.name);

  switch (variant) {
    case "search":
      return (
        <div className={`${className}`}>
          <div>
            {label && (
              <label
                htmlFor={inputprops.name}
                className={`block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300`}
              >
                {label}
                {inputprops.required ? "*" : ""}
              </label>
            )}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                />
              </div>
              <input
                id={inputprops.name}
                {...inputprops}
                {...r}
                className={`block w-full p-2.5 px-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                  !isError ? "border-gray-300" : "border-red-300"
                } `}
              />
              {clearable && (
                <button
                  type="submit"
                  onClick={() =>
                    setValue(inputprops.name, "", {
                      shouldDirty: true,
                    })
                  }
                  className="absolute right-0 pr-2.5 bottom-0 flex items-center justify-center h-full"
                >
                  <BackspaceIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
              )}
            </div>
          </div>
          {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </div>
      );

    default:
      return (
        <div className={`${className}`}>
          <div>
            {label && (
              <label
                htmlFor={inputprops.name}
                className={`block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300`}
              >
                {label}
                {inputprops.required ? "*" : ""}
              </label>
            )}
            <input
              id={inputprops.name}
              {...inputprops}
              {...register(inputprops.name)}
              className={`bg-gray-50 border focus:ring-2 outline-none focus:border-navy-500 focus:ring-navy-500 ${
                !isError ? "border-gray-300" : "border-red-300"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            />
          </div>
          {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </div>
      );
  }
};

Input.defaultProps = { variant: "standard" };
