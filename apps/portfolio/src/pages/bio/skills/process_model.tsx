import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
  const { t } = useTranslation(["processModel"]);
  return (
    <>
      <NextSeo title={t("seo.title")} description={t("seo.description")} />
      <ProcessModelBody />
    </>
  );
};

export default ProcessModel;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  locale = locale ?? "en";

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "processModel"])),
    },
  };
};
