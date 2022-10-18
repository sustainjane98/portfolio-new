import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
  const { t } = useTranslation(["design"]);
  return (
    <>
      <NextSeo title={t("seo.title")} description={t("seo.description")} />
      <DesignBody />
    </>
  );
};
export default Design;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  locale = locale ?? "en";

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "design"])),
    },
  };
};
