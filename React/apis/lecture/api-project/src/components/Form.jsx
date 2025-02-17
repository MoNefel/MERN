import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState("");
  const [number, setNumber] = useState(0);

  const handelSubmit = (e) => {
    e.preventDefault();
    navigate(`/${color}/${number}`);
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div className="form-control p-2 m-2">
          <label>What's your favorite color ?</label>
          <input type="text" onChange={(e) => setColor(e.target.value)} />
        </div>
        <div className="form-control p-2 m-2">
          <label>What's your lucky number ?</label>
          <input type="text" onChange={(e) => setNumber(e.target.value)} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
