import React, { PropsWithChildren } from "react";
import headerImage from "../assets/stavrialena-gontzou-68y-oRxeY_Y-unsplash.jpg";
import Image from "next/image";

export interface Props {}

/**
 * An Header React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
export const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="w-screen h-screen bg-[#2e74a0] relative">
      <Image src={headerImage} alt="Man with Rainbow Flag" layout="fill" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </header>
  );
};
