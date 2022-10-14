import React from "react";
import { NextSeo } from "next-seo";
import { ProjectsBody } from "../components/projects/projects-header";

export interface Props {}

/**
 * An Projects React Component.
 * @author Jane Will
 * @version 0.1
 */
const Projects: React.FC<Props> = () => {
  return (
    <>
      <NextSeo title="Projects" />
      <ProjectsBody />
    </>
  );
};
export default Projects;
