import { NextSeo } from "next-seo";
import React from "react";
import { BackendBody } from "../../../components/bio/backend-body";

export interface Props {}

/**
 * An Backend React Component.
 * @author Jane Will
 * @version 0.1
 */
const Backend: React.FC<Props> = () => {
  return (
    <>
      <NextSeo
        title="My backend Skill"
        description="I am a backend developer"
      />
      <BackendBody />
    </>
  );
};

export default Backend;
