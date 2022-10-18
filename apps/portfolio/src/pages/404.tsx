import React from "react";

import { NextSeo } from "next-seo";
import { NotFoundBody } from "../components/404/404-body";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export interface Props {}

/**
 * An 404" React Component.
 * @author
 * @version 0.1
 */
const ErrorPage: React.FC<Props> = () => {
  const { t } = useTranslation(["error"]);
  return (
    <>
      <NextSeo
        title={t("seo.title")}
        description={t("seo.description")}
        noindex
      />
      <NotFoundBody />
    </>
  );
};

export default ErrorPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  locale = locale ?? "en";

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "error"])),
    },
  };
};
