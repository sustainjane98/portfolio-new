import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useFormContext } from "../../hooks/useFormContext.hook";
import { useWatch } from "react-hook-form";
import { ErrorMessage } from "./error-message";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";

export interface Props {
  name: string;
  values: { displayValue: string; value: string }[];
  className?: string;
  required?: boolean;
  label: string;
}

/**
 * An Select React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Select: React.FC<Props> = ({
  values,
  name,
  className,
  label,
  required,
}) => {
  const {
    control,
    setValue,
    formState: { isError, errorMessage },
  } = useFormContext(name);

  const selectedValue = useWatch({ control, name }) as string;

  const selectedDisplayValue = values.find((v) => {
    if (v.value === (selectedValue as unknown as string)) {
      return v;
    }
    return undefined;
  })?.displayValue;

  return (
    <div className={`mb-6 ${className}`}>
      <div>
        <label
          htmlFor={name}
          className={`block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300`}
        >
          {label}
          {required ? "*" : ""}
        </label>
        <Listbox
          value={selectedValue}
          onChange={(v) => {
            setValue(name, v);
          }}
        >
          <div className="relative mt-1">
            <Listbox.Button
              className={`relative w-full cursor-default bg-gray-50 border focus:ring-2 outline-none focus:border-navy-500 focus:ring-navy-500 ${
                !isError ? "border-gray-300" : "border-red-300"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            >
              <span className="block truncate text-left">
                {selectedDisplayValue}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className={
                  "bg-gray-50 rounded-b-lg absolute border-b border-l border-r border-gray-300/50 w-full"
                }
              >
                {values.map((val) => (
                  <Listbox.Option
                    key={val.value}
                    value={val.value}
                    className={({ active }) =>
                      `relative cursor-default select-none text-gray-900 text-sm rounded-lg block w-full p-2.5`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate text-left ${
                            selected ? "font-bold text-navy-500" : "font-normal"
                          }`}
                        >
                          {val.displayValue}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    </div>
  );
};
