import { NextSeo } from "next-seo";
import React from "react";
import { ProcessModelBody } from "../../../components/bio/process-model-body";

export interface Props {}

/**
 * An ProcessModel React Component.
 * @author Jane Will
 * @version 0.1
 */
const ProcessModel: React.FC<Props> = () => {
  return (
    <>
      <NextSeo title="Project Management Skills" />
      <ProcessModelBody />
    </>
  );
};

export default ProcessModel;
