import { useTranslation } from "next-i18next";
import { NextSeo } from "next-seo";
import React from "react";
import { DesignBody } from "../../../components/bio/design-body";

export interface Props {}

/**
 * An Design React Component.
 * @author Jane Will
 * @version 0.1
 */
const Design: React.FC<Props> = () => {
  const { t } = useTranslation(["design"]);
  return (
    <>
      <NextSeo title={t("seo.title")} description={t("seo.description")} />
      <DesignBody />
    </>
  );
};
export default Design;
