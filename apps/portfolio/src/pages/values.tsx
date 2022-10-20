import { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import React from "react";
import { ValuesBody } from "../components/values/values-body";

/**
 * An Values React Component.
 * @author Jane Will
 * @version 0.1
 */
const Values: NextPage = () => {
  const { t } = useTranslation(["values"]);
  return (
    <>
      <NextSeo title={t("seo.title")} description={t("seo.description")} />
      <ValuesBody />
    </>
  );
};

export default Values;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  locale = locale ?? "en";

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "values"])),
    },
  };
};
