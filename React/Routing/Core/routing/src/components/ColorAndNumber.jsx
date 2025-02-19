import React from "react";
import { useParams } from "react-router-dom";

const ColorAndNumber = () => {
  const { string, color1, color2 } = useParams();
  return (
    <div>
      <h1 style={{ backgroundColor: color2, color: color1 }}>
        The word is : {string}
      </h1>
    </div>
  );
};

export default ColorAndNumber;
