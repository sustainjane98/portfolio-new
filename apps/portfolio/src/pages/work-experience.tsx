import { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import React from "react";
import { WorkExperienceBody } from "../components/work-experience/work-experience-body";

/**
 * An WorkExperience React Component.
 * @author Jane Will
 * @version 0.1
 */
export const WorkExperience: NextPage = () => {
  const { t } = useTranslation(["work-experience"]);
  return (
    <>
      <NextSeo title={t("seo.title")} description={t("seo.description")} />
      <WorkExperienceBody />
    </>
  );
};

export default WorkExperience;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  locale = locale ?? "en";

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "work-experience"])),
    },
  };
};
