import Link from "next/link";
import React from "react";
import { usePath } from "../../hooks/usePath.hook";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export interface Props {
  href: string;
  onClick?: () => void;
  children: string;
  subItems?: Props[];
}

/**
 * An NavigationItem React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
export const NavigationItem: React.FC<Props> = ({
  href,
  children,
  onClick,
  subItems,
}) => {
  const pathname = usePath();
  return (
    <>
      <li className="list-none" onClick={onClick}>
        <Link href={href}>
          <a
            className={`block py-2 pr-4 pl-3 text-white rounded${
              pathname === href ? " text-navy-200" : ""
            }  md:p-0 flex flex-row gap-x-2 items-center`}
          >
            <span className="font-semibold text-2xl">{children}</span>
            {subItems && <ChevronDownIcon className="w-6 h-6" />}
          </a>
        </Link>
      </li>
      {subItems?.map((subItem, index) => (
        <NavigationItem key={index} {...subItem} />
      ))}
    </>
  );
};
