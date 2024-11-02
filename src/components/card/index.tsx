import React from "react";
// types
import { CardProps } from "./types";
// component
import Button from "../button/Button";

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "5px",
      }}
    >
      <h1>{title}</h1>
      {description && <p>{description}</p>}

      <Button />
    </div>
  );
};

export default Card;
