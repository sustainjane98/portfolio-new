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
                "Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows. The feature set of Figma focuses on user interface and user experience design, with an emphasis on real-time collaboration, utilising a variety of vector graphics editor and prototyping tools.",
              href: "https://www.figma.com/",
              external: true,
              icon: <FigmaIcon className="w-6 h-6" />,
            },
            {
              title: "Adobe XD",
              description:
                "Adobe XD is a vector design tool for web and mobile applications, developed and published by Adobe Inc. It is available for macOS and Windows, and there are versions for iOS and Android to help preview the result of work directly on mobile devices. Adobe XD enables website wireframing and creating click-through prototypes.",
              href: "https://www.adobe.com/products/xd.html",
              external: true,
              icon: <AdobeXDIcon className="w-8 h-8" />,
            },
            {
              title: "Affinity Suite",
              description:
                "Affinity Photo is a raster graphics editor developed by Serif Ltd. for iOS, macOS, and Windows, alongside Affinity Designer and Affinity Publisher. Development of Affinity Photo started in 2009 as a raster graphics editor for macOS. Its first version reached general availability in 2015 with the Windows version launched a year later. It is a successor to PhotoPlus which Serif discontinued in 2017.",
              href: "https://affinity.serif.com/",
              external: true,
              icon: <AffinityIcon className="w-8 h-8 fill-white" />,
            },
            {
              title: "Designing User Interfaces",
              description:
                "Over 500 pages of knowledge coming from 25+ years of experience from Product Design professionals. Learn all the essentials, helpful tricks, tips and industry know-how to become a UI Designer.",
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
