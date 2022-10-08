import { Variants } from "framer-motion";

export const navigationItemAnimationVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const navigationContainerAnimationVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
    },
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const navigationBarAnimationVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 200,
    transition: { duration: 0.2, type: "tween", ease: "easeIn" },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, type: "tween", ease: "easeIn" },
  },
};
