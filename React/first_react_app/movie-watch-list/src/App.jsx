import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
  const [movieWatchList, setMovieWatchList] = useState([]);
  return (
    <>
      <h1>Movie WatchList</h1>
      <hr />
      <Form
        movieWatchList={movieWatchList}
        setMovieWatchList={setMovieWatchList}
      />
      <hr />
      <Display
        movieWatchList={movieWatchList}
        setMovieWatchList={setMovieWatchList}
      />
    </>
  );
}

export default App;
