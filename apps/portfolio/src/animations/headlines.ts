import { Variants } from "framer-motion";

export const headlineShowUpAnimation: Variants = {
  hidden: { opacity: 0, y: 70 },
  enter: { opacity: 1, y: 0, transition: { type: "tween", duration: 1.25 } },
  exit: { opacity: 0, y: -70 },
};
