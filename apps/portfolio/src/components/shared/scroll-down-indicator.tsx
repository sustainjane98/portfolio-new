import React from "react";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export interface Props {
  className?: string;
}

const ArrowDownIconMotionComponent = motion(ArrowDownIcon);

/**
 * An ScrollDownIndicator React Component.
 * @author Jane Will
 * @version 0.1
 */
export const ScrollDownIndicator: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`absolute lg:bottom-0 bottom-8 left-0 w-full flex justify-center items-center ${className}`}
    >
      <ArrowDownIconMotionComponent
        initial={{ y: -20 }}
        animate={{ y: -10 }}
        transition={{
          type: "spring",
          repeat: Infinity,
          duration: 0.8,
          repeatType: "reverse",
        }}
        className="w-10 h-10 text-white"
      />
    </div>
  );
};
