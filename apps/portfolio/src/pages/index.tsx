import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HomeBody } from "../components/home/home-body";
import { useTranslation } from "next-i18next";

const Home: NextPage = () => {
  const { t } = useTranslation(["home"]);
  return (
    <>
      <NextSeo title={t("seo.title")} description={t("seo.description")} />
      <HomeBody />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  locale = locale ?? "en";

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
};
