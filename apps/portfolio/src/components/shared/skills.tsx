import React from "react";
import { Card, Props as CardProps } from "./card";
import { CardContainer } from "./card-container";

export interface Props {
  title: string;
  skills: CardProps[];
  id?: string;
}

/**
 * An Skills React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Skills: React.FC<Props> = ({ skills, title, id }) => {
  return (
    <div className="px-4 py-ios-12 pb-4" id={id}>
      <h2 className="font-extrabold text-3xl flex justify-center items-center text-black dark:text-white">
        <span>{title}</span>
      </h2>
      <CardContainer className="mt-6">
        {skills?.map((skill, index) => (
          <Card {...skill} key={index} />
        ))}
      </CardContainer>
    </div>
  );
};
