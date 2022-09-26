import React from "react";
import { HeaderWithTwoSections } from "../components/bio/header-with-two-sections/header-with-two-sections";

export interface Props {}

/**
 * An Biography React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
const Biography: React.FC<Props> = () => {
  return (
    <>
      <HeaderWithTwoSections />
    </>
  );
};

export default Biography;
