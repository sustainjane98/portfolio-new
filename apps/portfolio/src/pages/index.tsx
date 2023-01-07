import React from "react";
import { BiographyBody } from "../components/bio/biography-body";
import { NextSeo } from "next-seo";
import { GetStaticProps, NextPage } from "next";
import GithubService from "../services/github.service";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export interface StaticProps {
  avatarUrl: string;
}

/**
 * An Biography React Component.
 * @author Jane Will
 * @version 0.1
 */
const Biography: NextPage<StaticProps> = ({ avatarUrl }) => {
  const { t } = useTranslation(["whoAmI"]);
  return (
    <>
      <NextSeo title={t("seo.title")} description={t("seo.description")} />
      <BiographyBody githubProfileUrl={avatarUrl} />
    </>
  );
};

export default Biography;

export const getStaticProps: GetStaticProps<StaticProps> = async ({
  locale,
}) => {
  locale = locale ?? "en";
  const ghs = new GithubService();
  const { avatar_url } = await ghs.getUser("sustainjane98");

  return {
    props: {
      avatarUrl: avatar_url,
      ...(await serverSideTranslations(locale, ["common", "whoAmI"])),
    },
  };
};
