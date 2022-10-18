import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HomeBody } from "../components/home/home-body";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Intro"
        description="Hey I am Jane, I am a trans woman and software developer, with the mission to produce beautiful and functional web applications. If you like, we can get to know each other better"
      />
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
