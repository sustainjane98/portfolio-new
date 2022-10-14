import React from "react";

import { NextSeo } from "next-seo";
import { NotFoundBody } from "../components/404/404-body";

export interface Props {}

/**
 * An 404" React Component.
 * @author
 * @version 0.1
 */
const ErrorPage: React.FC<Props> = () => {
  return (
    <>
      <NextSeo title="Something went wrong..." />
      <NotFoundBody />
    </>
  );
};

export default ErrorPage;
