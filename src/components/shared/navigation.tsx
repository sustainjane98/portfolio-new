import React, { useEffect, useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UserIcon,
  ComputerDesktopIcon,
  ServerIcon,
  PencilIcon,
  ArrowTrendingUpIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { NavigationItem } from "./navigation-item";

export interface Props {}

/**
 * An Navigation React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Navigation: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [open]);

  return (
    <>
      <div className="fixed top-[0px_+_env(safe-area-inset-left)] left-0 z-30 pl-3 pt-4 flex flex-col">
        <button
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {open ? (
            <XMarkIcon className="w-10 h-10 fill-navy-400" />
          ) : (
            <Bars3Icon className="w-10 h-10 fill-navy-400" />
          )}
        </button>
      </div>
      {open && (
        <div className="fixed top-0 left-0 w-full h-full z-30 flex">
          <div
            className="h-full w-full bg-black/[0.50] cursor-pointer"
            onClick={() => setOpen(false)}
          />
          <nav className="fixed z-20 h-full px-12 py-8 w-auto max-w-md bg-gray-900 rounded-l-lg flex flex-col items-end gap-y-2 top-0 right-0 bottom-0">
            <NavigationItem
              onClick={() => setOpen(false)}
              href="/"
              icon={<HomeIcon className="w-6 h-6" />}
            >
              Home
            </NavigationItem>
            <NavigationItem
              onClick={() => setOpen(false)}
              href="/bio"
              icon={<UserIcon className="w-6 h-6" />}
            >
              Who am I
            </NavigationItem>
            <NavigationItem
              onClick={() => setOpen(false)}
              href="/bio#skills"
              subItems={[
                {
                  href: "/bio#skills",
                  children: "Overview",
                  icon: <ComputerDesktopIcon className="w-6 h-6" />,
                },
                {
                  href: "/bio/skills/frontend",
                  children: "Frontend",
                  icon: <ComputerDesktopIcon className="w-6 h-6" />,
                },
                {
                  href: "/bio/skills/backend",
                  children: "Backend",
                  icon: <ServerIcon className="w-6 h-6" />,
                },
                {
                  href: "/bio/skills/design",
                  children: "Design",
                  icon: <PencilIcon className="w-6 h-6" />,
                },
                {
                  href: "/bio/skills/process_model",
                  children: "Project Management",
                  icon: <ArrowTrendingUpIcon className="w-6 h-6" />,
                },
              ]}
            >
              Skills
            </NavigationItem>
            <div className="h-full" />
            <NavigationItem
              onClick={() => setOpen(false)}
              href="/impressum"
              icon={<InformationCircleIcon className="w-6 h-6" />}
            >
              Impressum
            </NavigationItem>
          </nav>
        </div>
      )}
    </>
  );
};
