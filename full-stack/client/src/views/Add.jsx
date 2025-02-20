import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState(1980);
  const [genre, setGenre] = useState("");
  const [isExplicit, setIsExplicit] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const newAlbum = {
      title,
      artist,
      year,
      genre,
      isExplicit
    };
    axios
      .post("http://localhost:8000/api/albums", newAlbum)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };
  return (
    <div>
      <NavBar title={"Add Album"} />
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formGroupTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title ? (
            <p className="text-danger">{errors.title.message}</p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formArtistName">
          <Form.Label>Artist</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Artist Name"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          {errors.artist ? (
            <p className="text-danger">{errors.artist.message}</p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formYear">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter The year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          {errors.year ? (
            <p className="text-danger">{errors.year.message}</p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGenre">
          <Form.Label>Genre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          {errors.genre ? (
            <p className="text-danger">{errors.genre.message}</p>
          ) : null}
        </Form.Group>
        <Form.Check
          type="switch"
          label="Explicit"
          onChange={() => setIsExplicit(!isExplicit)}
          checked={isExplicit}
        />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default Add;
