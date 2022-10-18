import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
  const { t } = useTranslation(["backend"]);
  return (
    <>
      <NextSeo title={t("seo.title")} description={t("seo.description")} />
      <BackendBody />
    </>
  );
};

export default Backend;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  locale = locale ?? "en";

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "backend"])),
    },
  };
};
