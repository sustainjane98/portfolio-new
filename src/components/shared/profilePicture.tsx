import Image, { ImageProps } from "next/image";
import React from "react";

export interface Props extends ImageProps {
  alt: string;
}

/**
 * An ProfilePicture React Component.
 * @author Jane Will
 * @version 0.1
 */
export const ProfilePicture: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="xl:flex xl:items-center xl:h-full xl:absolute static -top-32 xl:-top-16 right-0 xl:-right-48 xl:mb-0 mb-7">
      <div className=" rounded-full shadow-lg w-40 h-40 overflow-hidden z-50 border-white border-2">
        <div className="relative w-full h-full">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image {...props} />
        </div>
      </div>
    </div>
  );
};
