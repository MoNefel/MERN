import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const { movieWatchList, setMovieWatchList } = props;

  const [movieTitle, setMovieTitle] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("Action");
  const [releaseYear, setReleaseYear] = useState(1920);
  //   const [hasBeenWatched, setHasBeenWatched] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const newMovie = {
      id: uuidv4(),
      movieTitle,
      director,
      genre,
      releaseYear,
      hasBeenWatched: false
    };
    setMovieWatchList([...movieWatchList, newMovie]);
    setMovieTitle("");
    setDirector("");
    setGenre("Action");
    setReleaseYear(1920);
    console.log(newMovie);
  };

  return (
    <>
      <h1>Add Movie</h1>
      <form onSubmit={submitHandler} className="form-control m-10">
        <div className="form-control">
          <label>Title :</label>
          <input
            className="form-control"
            type="text"
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Director :</label>
          <input
            className="form-control"
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Genre :</label>
          <select
            className="form-control"
            onChange={(e) => {
              setGenre(e.target.value);
            }}
          >
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="SCi-Fi">SCi-Fi</option>
            <option value="Family">Family</option>
          </select>
        </div>
        <div className="form-control">
          <label>Release Year :</label>
          <input
            className="form-control"
            type="number"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
          />
        </div>
        <button>Add</button>
      </form>
    </>
  );
};

export default Form;
