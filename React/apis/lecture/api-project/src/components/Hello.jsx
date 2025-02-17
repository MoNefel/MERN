import React from "react";
import { useParams } from "react-router-dom";

const Hello = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
};

export default Hello;
