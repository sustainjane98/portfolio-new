import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import headerImage from "../assets/stavrialena-gontzou-68y-oRxeY_Y-unsplash.jpg";
import { SkillsTemplate } from "../templates/skills.template";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Intro" />
      <SkillsTemplate
        header={{
          headline: {
            headline: "I am the caterpillar that became a butterfly",
            subheadline: "I build web pages with passion",
          },
          body: "I am a software developer, with the misson to realize beautiful and functional web applications. If you like, we can get to know each other better",
          src: headerImage,
          className: "bg-navy-500",
          buttons: [{ href: "/bio", children: "Get to know me" }],
        }}
      />
    </>
  );
};

export default Home;
