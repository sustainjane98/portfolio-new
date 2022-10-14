import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import headerImagePrev from "../assets/stavrialena-gontzou-68y-oRxeY_Y-unsplash-1200x600.jpg";
import { HomeBody } from "../components/home/home-body";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Intro"
        description="Hey I am Jane, I am a trans woman and software developer, with the mission to produce beautiful and functional web applications. If you like, we can get to know each other better"
        openGraph={{
          images: [
            {
              url: headerImagePrev.src,
              height: headerImagePrev.height,
              width: headerImagePrev.width,
              alt: "Person waving rainbow flag",
            },
          ],
        }}
      />
      <HomeBody />
    </>
  );
};

export default Home;
