import React from "react";
// types
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description ? description : "No description"}</p>
    </div>
  );
};

export default Card;
