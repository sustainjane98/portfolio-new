import React from "react";

export interface Props
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "className"
  > {
  name: string;
  children: string | React.ReactElement;
  active?: boolean;
  role?: string;
}

/**
 * An Toggle React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Toggle: React.FC<Props> = ({
  children,
  name,
  active,
  role,
  ...inputProps
}) => {
  return (
    <div className="mb-3" role={role}>
      <div className="relative inline-block w-10 mr-2 align-middle select-none">
        <input
          checked={active}
          {...inputProps}
          type="checkbox"
          name={name}
          id={name}
          className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label
          htmlFor={name}
          className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
      <span className="text-gray-400 font-medium">{children}</span>
    </div>
  );
};
