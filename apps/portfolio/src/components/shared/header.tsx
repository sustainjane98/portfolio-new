import React, { PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/legacy/image";
import { Link } from "./link";

export interface Props {
  src: StaticImageData;
  className?: string;
  multipleChildren?: boolean;
  indicator?: React.ReactElement;
  source?: { href: string; copyright: string };
  background: string;
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
  multipleChildren,
  indicator,
  source,
  background,
}) => {
  return (
    <header
      role="banner"
      className={`w-screen min-h-screen relative ${background} ${className} `}
    >
      <div className="relative w-[100vw_+_env(safe-area-inset-left)] min-h-screen">
        <Image
          src={src}
          alt="Man with Rainbow Flag"
          placeholder="blur"
          layout="fill"
          className={`object-cover ${className}`}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        ></Image>
        {source && (
          <Link
            noUnderline
            href={source.href}
            external
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-2 right-6 z-30"
          >
            <span className="text-gray-300 font-normal text-sm">
              © {source.copyright}
            </span>
          </Link>
        )}
        <div className="absolute bg-[#0c111663] top-0 left-0 w-full h-full z-10" />
        <div className="relative z-20 px-ios-4 sm:px-ios-2 lg:px-ios-0 py-16 w-screen min-h-screen flex items-center justify-center">
          {multipleChildren ? (
            children
          ) : (
            <div className="max-w-7xl relative">{children}</div>
          )}
        </div>
        {indicator}
      </div>
    </header>
  );
};
