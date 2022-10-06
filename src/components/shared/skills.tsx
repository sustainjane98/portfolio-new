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
