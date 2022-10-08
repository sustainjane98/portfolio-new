import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePath } from "../../hooks/usePath.hook";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { motion, useAnimationControls } from "framer-motion";
import {
  navigationContainerAnimationVariants,
  navigationItemAnimationVariants,
} from "../../animations/navigation";
import { useUpdateEffect } from "usehooks-ts";

export interface Props {
  href: string;
  onClick?: () => void;
  children: string;
  icon?: React.ReactElement;
  subItems?: Props[];
}

/**
 * An NavigationItem React Component.
 * @author Jane Will
 * @version 0.1
 */
export const NavigationItem: React.FC<Props> = ({
  href,
  children,
  onClick,
  subItems,
  icon,
}) => {
  const isActive = usePath(
    subItems ? subItems.map(({ href }) => href) : [href]
  );

  const [show, setShow] = useState(false);
  const subItemControl = useAnimationControls();

  useUpdateEffect(() => {
    if (show) {
      subItemControl.start("show");
    } else {
      subItemControl.start("hidden");
    }
  }, [show]);

  const Anchor = (
    <a>
      <button
        onClick={() => setShow((prev) => !prev)}
        className={`block py-2 pr-4 pl-3 text-white rounded${
          isActive ? " text-navy-200" : ""
        }  md:p-0 flex flex-row gap-x-2 items-center`}
      >
        <span className="font-semibold text-2xl text-right">{children}</span>
        {subItems ? (
          show ? (
            <ChevronUpIcon className="w-6 h-6" />
          ) : (
            <ChevronDownIcon className="w-6 h-6" />
          )
        ) : (
          icon ?? <div className="w-6" />
        )}
      </button>
    </a>
  );

  return (
    <>
      <li
        className="list-none"
        onClick={
          subItems
            ? () => {
                return;
              }
            : onClick
        }
      >
        {subItems ? Anchor : <Link href={href}>{Anchor}</Link>}
      </li>
      {subItems && subItems?.length && show && (
        <motion.div
          variants={navigationContainerAnimationVariants}
          initial={"hidden"}
          animate={subItemControl}
          className="flex flex-col items-end gap-y-2"
          onAnimationComplete={() => {
            setShow((prev) => !prev);
          }}
        >
          {subItems?.map((subItem, index) => (
            <motion.div
              variants={navigationItemAnimationVariants}
              key={index}
              className="list-none"
            >
              <NavigationItem {...subItem} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
};
