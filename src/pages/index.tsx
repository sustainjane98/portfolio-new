import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { CTASection } from "../components/intro/cta-section";
import { Header } from "../components/shared/header";
import headerImage from "../assets/stavrialena-gontzou-68y-oRxeY_Y-unsplash.jpg";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Intro" />
      <Header src={headerImage} className="bg-navy-500">
        <CTASection />
      </Header>
    </>
  );
};

export default Home;
