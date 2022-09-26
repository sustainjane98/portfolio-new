import React, { PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";
import classNames from "classnames";

export interface Props {
  src: StaticImageData;
  className?: string;
}

/**
 * An Header React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
export const Header: React.FC<PropsWithChildren<Props>> = ({
  children,
  src,
  className,
}) => {
  return (
    <header className={`w-screen h-screen relative ${className} `}>
      <Image src={src} alt="Man with Rainbow Flag" layout="fill" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="relative top-0 left-0 w-full h-full">
          <div className="bg-[#0c111663] top-0 left-0 w-full h-full" />
          <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center flex-col">
            {children}
          </div>
        </div>
      </div>
    </header>
  );
};
