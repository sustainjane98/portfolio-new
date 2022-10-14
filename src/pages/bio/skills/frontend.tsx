import { NextSeo } from "next-seo";
import React from "react";
import { useRouter } from "next/router";
import { FrontendBody } from "../../../components/bio/frontend-body";

export interface Props {}

/**
 * An FrotendPage React Component.
 * @author
 * @version 0.1
 */
const FrotendPage: React.FC<Props> = () => {
  return (
    <>
      <NextSeo title="Frontend Skills" />
      <FrontendBody />
    </>
  );
};

export default FrotendPage;
