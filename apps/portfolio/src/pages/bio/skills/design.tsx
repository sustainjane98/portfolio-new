import { NextSeo } from "next-seo";
import React from "react";
import { DesignBody } from "../../../components/bio/design-body";

export interface Props {}

/**
 * An Design React Component.
 * @author Jane Will
 * @version 0.1
 */
const Design: React.FC<Props> = () => {
  return (
    <>
      <NextSeo
        title="My UI/UX Design Skills"
        description="I am a hobby User Experience Designer"
      />
      <DesignBody />
    </>
  );
};
export default Design;
