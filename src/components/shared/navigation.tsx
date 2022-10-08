import React, { useEffect, useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  InformationCircleIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import { NavigationItem } from "./navigation-item";
import { main } from "../../config/navigation-links";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Toggle } from "./toggle";
import { useColorscheme } from "../../hooks/useColorscheme.hook";
import { navigationBarAnimationVariants } from "../../animations/navigation";

export interface Props {}

/**
 * An Navigation React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Navigation: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);

  const x = useSpring(200);
  const opacity = useTransform(x, [200, 150, 100, 50, 0], [0, 0.25, 0.5, 1, 1]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open, x]);

  const { isDark, changeColorScheme } = useColorscheme();

  return (
    <>
      <div className="fixed top-0 left-0 z-30 px-ios-3 pt-4 flex flex-row justify-between w-screen items-center">
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
        <Toggle
          active={isDark}
          onChange={() => {
            changeColorScheme();
          }}
          name="scheme"
        >
          <MoonIcon className="inline-block w-6 h-6" />
        </Toggle>
      </div>
      <AnimatePresence>
        {open && (
          <div className="fixed top-0 left-0 w-full h-full z-30 flex">
            <div
              className="h-full w-full bg-black/[0.50] cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            />
            <motion.nav
              variants={navigationBarAnimationVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              style={{ x, opacity }}
              className="fixed z-20 h-full px-12 py-8 w-auto bg-gray-900 rounded-l-lg flex flex-col items-end gap-y-2 top-0 right-0 bottom-0 max-w-[70vw]"
            >
              {main.map((props, index) => (
                <NavigationItem
                  {...props}
                  key={index}
                  onClick={() => setOpen((prev) => !prev)}
                  subItems={props.subItems?.map((props) => ({
                    ...props,
                    onClick: () => setOpen((prev) => !prev),
                  }))}
                />
              ))}
              <div className="h-full" />
              <NavigationItem
                onClick={() => setOpen((prev) => !prev)}
                href="/impressum"
                icon={<InformationCircleIcon className="w-6 h-6" />}
              >
                Impressum
              </NavigationItem>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
