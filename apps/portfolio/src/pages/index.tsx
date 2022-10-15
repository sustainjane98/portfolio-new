import type { NextPage } from "next";
import { NextSeo } from "next-seo";

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
