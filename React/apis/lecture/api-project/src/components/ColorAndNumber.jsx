import React from "react";
import { useParams } from "react-router-dom";

const ColorAndNumber = () => {
  const { color, number } = useParams();
  return (
    <div>
      <hr />
      <h1>Color And Number</h1>
      <p style={{ backgroundColor: color }}>your favorite color is : {color}</p>
      <p>your lucky number is : {number}</p>
    </div>
  );
};

export default ColorAndNumber;
