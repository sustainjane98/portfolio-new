import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { NavigationItem } from "./navigation-item";
import { useScroll } from "framer-motion";

export interface Props {}

/**
 * An Navigation React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
export const Navigation: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 z-10 ml-4 my-4 flex flex-col">
        <button
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {open ? (
            <XMarkIcon className="w-10 h-10 fill-white" />
          ) : (
            <Bars3Icon className="w-10 h-10 fill-white" />
          )}
        </button>
      </div>
      {open && (
        <nav className="fixed z-10 h-full w-auto px-16 py-8 max-w-md bg-gray-900 rounded-l-lg flex flex-col items-end gap-y-2 top-0 right-0 bottom-0">
          <NavigationItem onClick={() => setOpen(false)} href="/">
            Home
          </NavigationItem>
          <NavigationItem onClick={() => setOpen(false)} href="/bio">
            Who am I
          </NavigationItem>
          <NavigationItem
            onClick={() => setOpen(false)}
            href="/bio#skills"
            subItems={[{ href: "/skill/frontend", children: "Frontend" }]}
          >
            Skills
          </NavigationItem>
        </nav>
      )}
    </>
  );
};
