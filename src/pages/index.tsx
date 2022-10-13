import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import headerImage from "../assets/stavrialena-gontzou-68y-oRxeY_Y-unsplash.webp";
import headerImagePrev from "../assets/stavrialena-gontzou-68y-oRxeY_Y-unsplash-1200x600.jpg";
import { SkillsTemplate } from "../templates/skills.template";

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
      <SkillsTemplate
        header={{
          headline: {
            headline: "I am the caterpillar that became a butterfly",
            subheadline: "I build web pages with passion",
          },
          body: "I am a trans woman and software developer, with the mission to produce beautiful and functional web applications. If you like, we can get to know each other better",
          src: headerImage,
          className: "bg-navy-500",
          buttons: [{ href: "/bio", children: "Get to know me" }],
        }}
      />
    </>
  );
};

export default Home;
