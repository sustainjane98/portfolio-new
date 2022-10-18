import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import React from "react";
import { FrontendBody } from "../../../components/bio/frontend-body";

export interface Props {}

/**
 * An FrotendPage React Component.
 * @author
 * @version 0.1
 */
const FrotendPage: React.FC<Props> = () => {
  const { t } = useTranslation(["frontend"]);
  return (
    <>
      <NextSeo title={t("seo.title")} description={t("seo.description")} />
      <FrontendBody />
    </>
  );
};

export default FrotendPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  locale = locale ?? "en";

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "frontend"])),
    },
  };
};
