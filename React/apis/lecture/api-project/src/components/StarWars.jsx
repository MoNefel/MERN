import React from "react";
import { Link } from "react-router-dom";

const StarWars = (props) => {
  const { people } = props;

  return (
    <>
      <h1>Api Intro</h1>
      <hr />
      <h2>Star Wars Characters</h2>
      {people.map((char, idx) => (
        <div key={idx}>
          <p>{char.name}</p>
        </div>
      ))}
      <Link to={"/"}>Home</Link>
    </>
  );
};

export default StarWars;
