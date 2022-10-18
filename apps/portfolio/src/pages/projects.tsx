import React from "react";
import { NextSeo } from "next-seo";
import { ProjectsBody } from "../components/projects/projects-header";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export interface Props {}

/**
 * An Projects React Component.
 * @author Jane Will
 * @version 0.1
 */
const Projects: React.FC<Props> = () => {
  const { t } = useTranslation(["projects"]);
  return (
    <>
      <NextSeo title={t("headline")} description={t("subheadline")} />
      <ProjectsBody />
    </>
  );
};
export default Projects;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  locale = locale ?? "en";

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "projects"])),
      // Will be passed to the page component as props
    },
  };
};
