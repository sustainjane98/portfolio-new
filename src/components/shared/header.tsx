import React, { PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";
import classNames from "classnames";
import { Navigation } from "./navigation";

export interface Props {
  src: StaticImageData;
  className?: string;
}

/**
 * An Header React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Header: React.FC<PropsWithChildren<Props>> = ({
  children,
  src,
  className,
}) => {
  return (
    <header className={`w-screen min-h-screen relative ${className} `}>
      <Navigation />
      <div className="absolute top-0 left-0 w-full min-h-screen">
        <div className="relative w-[100vw_+_env(safe-area-inset-left)] min-h-screen">
          <Image
            src={src}
            alt="Man with Rainbow Flag"
            layout="fill"
            className="object-cover"
            priority
          ></Image>
          <div className="absolute bg-[#0c111663] top-0 left-0 w-full h-full z-10" />
          <div className="relative z-20 px-4 sm:px-2 lg:px-0 py-16 w-screen min-h-screen flex items-center justify-center">
            <div className="max-w-7xl">{children}</div>
          </div>
        </div>
      </div>
    </header>
  );
};
