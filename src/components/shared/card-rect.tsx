import React from "react";

export interface Props {
  icon: React.ReactNode | React.ReactElement;
  disableAutoPlace?: boolean;
}

/**
 * An CardRect React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
export const CardRect: React.FC<Props> = ({ icon, disableAutoPlace }) => {
  return (
    <div
      className={`flex items-center${
        disableAutoPlace ? "" : " mx-auto"
      } justify-center h-12 w-12 rounded-md bg-navy-500 text-white`}
    >
      {icon}
    </div>
  );
};
