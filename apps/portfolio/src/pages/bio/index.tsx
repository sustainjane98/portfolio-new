import { useRouter } from "next/router";
import React from "react";
import { BiographyBody } from "../../components/bio/biography-body";
import { motion } from "framer-motion";
import { globalAnimationVariants } from "../../animations/global";
import { NextSeo } from "next-seo";
import { GetStaticProps, NextPage } from "next";
import GithubService from "../../services/github.service";

export interface StaticProps {
  avatarUrl: string;
}

/**
 * An Biography React Component.
 * @author Jane Will
 * @version 0.1
 */
const Biography: NextPage<StaticProps> = ({ avatarUrl }) => {
  return (
    <>
      <NextSeo title="Who am I?" />
      <BiographyBody githubProfileUrl={avatarUrl} />
    </>
  );
};

export default Biography;

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  const ghs = new GithubService();
  const { avatar_url } = await ghs.getUser("jawil003");

  return {
    props: { avatarUrl: avatar_url }, // will be passed to the page component as props
  };
};