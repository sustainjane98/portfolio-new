import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon, MoonIcon } from "@heroicons/react/24/solid";
import { NavigationItem } from "./navigation-item";
import { main } from "../../config/navigation-links";
import { AnimatePresence, motion } from "framer-motion";
import { Toggle } from "./toggle";
import { useColorscheme } from "../../hooks/useColorscheme.hook";
import { navigationBarAnimationVariants } from "../../animations/navigation";
import Logo from "../../assets/logo.svg";
import { LanguageSwitcher } from "./language-switcher";
export interface Props {}

/**
 * An Navigation React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Navigation: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);

  const { isDark, changeColorScheme } = useColorscheme();

  return (
    <nav role="navigation">
      <div className="fixed top-0 left-0 z-30 px-ios-3 pt-4 flex flex-row justify-between w-screen items-center">
        <button
          aria-label="Navigation Button"
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
          aria-label="Colorschema toggle"
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
          <div className="fixed top-0 left-0 w-full h-full z-40 flex">
            <div
              className="h-full w-full bg-black/[0.50] cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            />
            <motion.div
              variants={navigationBarAnimationVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="fixed z-20 h-full px-12 py-8 w-auto bg-gray-900 rounded-l-lg flex flex-col items-end gap-y-2 top-0 right-0 bottom-0 max-w-[70vw]"
            >
              <Logo className="w-24 mb-6" />
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
              <LanguageSwitcher onClick={() => setOpen((prev) => !prev)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};
