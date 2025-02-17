const Display = (props) => {
  const { movieWatchList, setMovieWatchList } = props;

  const handelDelete = (id) => {
    console.log(id);
    const updateMovieWatchList = movieWatchList.filter(
      (movie) => movie.id !== id
    );
    console.log(updateMovieWatchList);
    setMovieWatchList(updateMovieWatchList);
  };

  const toggleHasBeenWatched = (id) => {
    const updateMovieWatchList = movieWatchList.map((movie) => {
      if (movie.id === id) {
        movie.hasBeenWatched = !movie.hasBeenWatched;
      }
      return movie;
    });
    setMovieWatchList(updateMovieWatchList);
  };

  return (
    <>
      <h1>Movie List</h1>
      <div className="d-flex justify-content-between">
        {movieWatchList.map((movie) => (
          <div key={movie.id} className="border m-2 p-2">
            {movie.hasBeenWatched ? (
              <p className="text-decoration-line-through">
                Title : {movie.movieTitle}
              </p>
            ) : (
              <p>Title : {movie.movieTitle}</p>
            )}
            <p>Director : {movie.director}</p>
            <p>Genre : {movie.genre}</p>
            <p>Release Year : {movie.releaseYear}</p>
            <button
              className="btn btn-danger"
              onClick={() => handelDelete(movie.id)}
            >
              Delete
            </button>
            <br />
            <label>Toggle Watched Movie</label>
            <input
              type="checkbox"
              onClick={() => toggleHasBeenWatched(movie.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Display;
