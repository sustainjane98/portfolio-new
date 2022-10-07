import { NextSeo } from "next-seo";
import React from "react";
import { SkillsTemplate } from "../../../templates/skills.template";
import uiImage from "../../../assets/ux-indonesia-qC2n6RQU4Vw-unsplash.jpg";
import FigmaIcon from "../../../assets/figma-1.svg";
import AdobeXDIcon from "../../../assets/adobe-xd-1.svg";
import AffinityIcon from "../../../assets/affinity-1.svg";
import { BookOpenIcon } from "@heroicons/react/24/solid";

export interface Props {}

/**
 * An Design React Component.
 * @author Jane Will
 * @version 0.1
 */
const Design: React.FC<Props> = () => {
  return (
    <>
      <NextSeo title="Design Skills" />
      <SkillsTemplate
        header={{
          headline: {
            headline: "My UI/UX Design Skills",
            subheadline: "I am a hobby User Experience Designer",
          },
          src: uiImage,
          className: "bg-[#949694]",
        }}
        skills={{
          title: "Design Skills",
          skills: [
            {
              title: "Figma",
              description:
                "In my spare time, I exclusively use Figma to design new interfaces for web applications. I am therefore now very familiar with this tool and can realize UI/UX designs in it.",
              href: "https://www.figma.com/",
              external: true,
              icon: <FigmaIcon className="w-6 h-6" />,
            },
            {
              title: "Adobe XD",
              description:
                "In a large frontend project where I worked as a frontend developer, Adobe XD was used as a tool for the design drafts for the custom design system. Therefore I know the web interface of this tool very well, even if the styles are not always ideally output there, I could work with it.",
              href: "https://www.adobe.com/products/xd.html",
              external: true,
              icon: <AdobeXDIcon className="w-8 h-8" />,
            },
            {
              title: "Affinity Suite",
              description:
                "In my spare time projects I use Affinity to edit photos fund to modify vector graphics for my web applications. In addition, I am also able to crop elements from photos to use them without a background, for example.",
              href: "https://affinity.serif.com/",
              external: true,
              icon: <AffinityIcon className="w-8 h-8 fill-white" />,
            },
            {
              title: "Designing User Interfaces",
              description:
                "I have long had an interest in learning how to make a web application beautiful and functional. Before reading this book, however, I could only do so by gfeel and the results were mixed. This book by two renowned UI/UX designers, has given it all a firm structure for me to follow. It has greatly improved my skills in this area. Unfortunately, I haven't had the opportunity to use these skills in a job yet, but would be very interested in doing so.",
              href: "https://designingui.com/",
              external: true,
              icon: <BookOpenIcon className="w-8 h-8 fill-white" />,
            },
          ],
        }}
      />
    </>
  );
};
export default Design;
