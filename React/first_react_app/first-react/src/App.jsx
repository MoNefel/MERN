import { useState } from "react";
import "./App.css";
import Bench from "./components/Bench";
import DisplayAlbums from "./components/DisplayAlbums";
import Form from "./components/Form";
import Header from "./components/Header";
import NewForm from "./components/NewForm";
import Player from "./components/Player";
import Team from "./components/Team";

const App = () => {
  const [albums, setAlbums] = useState([]);

  return (
    <div className="w-50 mx-auto">
      <NewForm albums={albums} setAlbums={setAlbums} />
      <DisplayAlbums albums={albums} setAlbums={setAlbums} />
      {/* <Form/>
<Header/>
<Team/>
<Player name={"Med Akez"} position={"Forward"} number={55} points={32} />
<Player name={"Akamensi"} position={"backward"} number={22} points={33} />
<Bench/> */}
    </div>
  );
};

export default App;
