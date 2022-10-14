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
      <NextSeo title="Design Skills" />
      <DesignBody />
    </>
  );
};
export default Design;
