import { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import React from "react";
import { EducationBody } from "../components/education/education-body";

/**
 * An Education React Component.
 * @author Jane Will
 * @version 0.1
 */
const Education: NextPage = () => {
  const { t } = useTranslation(["education"]);
  return (
    <>
      <NextSeo title={t("seo.title")} description={t("seo.description")} />
      <EducationBody />
    </>
  );
};

export default Education;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  locale = locale ?? "en";

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "education"])),
    },
  };
};
