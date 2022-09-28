import React from "react";
import { Card, Props as CardProps } from "./card";
import { CardContainer } from "./card-container";
import {
  PencilIcon,
  ComputerDesktopIcon,
  ServerIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

export interface Props {
  title: string;
  skills: CardProps[];
  id?: string;
}

/**
 * An Skills React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
export const Skills: React.FC<Props> = ({ skills, title, id }) => {
  const { pathname } = useRouter();

  return (
    <div className="my-12" id={id}>
      <h3 className="font-extrabold text-3xl flex justify-center items-center">
        <span>{title}</span>
      </h3>
      <CardContainer className="mt-6">
        {skills?.map((skill, index) => (
          <Card {...skill} key={index} />
        ))}
      </CardContainer>
    </div>
  );
};
