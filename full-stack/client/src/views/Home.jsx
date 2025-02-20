import React from "react";
import NavBar from "../components/NavBar";
import DisplayAll from "../components/DisplayAll";

const Home = () => {
  return (
    <div>
      <NavBar title={"Album Catalog"} />
      <DisplayAll />
    </div>
  );
};

export default Home;
