import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { title } = props;
  return (
    <header>
      <nav className="d-flex justify-content-around border">
        <div className="left d-flex flex-column">
          <Link className="btn btn-primary" to={"/"}>
            Catalog
          </Link>
          <Link className="btn btn-primary" to={"/add"}>
            Add Album
          </Link>
        </div>
        <div className="right">
          <h1>{title}</h1>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
