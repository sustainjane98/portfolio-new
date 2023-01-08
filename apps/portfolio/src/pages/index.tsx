import React from "react";
import { BiographyBody } from "../components/bio/biography-body";
import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export interface StaticProps {
  avatarUrl: string;
}

/**
 * An Biography React Component.
 * @author Jane Will
 * @version 0.1
 */
const Biography: NextPage<StaticProps> = () => {
  const { t } = useTranslation(["whoAmI"]);
  return (
    <>
      <NextSeo title={t("seo.title")} description={t("seo.description")} />
      <BiographyBody />
    </>
  );
};

export default Biography;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  locale = locale ?? "en";

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "whoAmI"])),
      // Will be passed to the page component as props
    },
  };
};
