import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import headerPic from "../assets/stavrialena-gontzou-68y-oRxeY_Y-unsplash.jpg";
import { CTASection } from "../components/cta-section";
import { Header } from "../components/header";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Intro" />
      <Header>
        <CTASection />
      </Header>
    </>
  );
};

export default Home;
