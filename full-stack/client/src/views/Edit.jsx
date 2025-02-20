import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Form from "react-bootstrap/Form";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState(1980);
  const [genre, setGenre] = useState("");
  const [isExplicit, setIsExplicit] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/albums/${id}`)
      .then((res) => {
        console.log(res);
        setTitle(res.data.title);
        setArtist(res.data.artist);
        setYear(res.data.year);
        setGenre(res.data.genre);
        setIsExplicit(res.data.isExplicit);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();
    const updateAlbum = {
      title,
      artist,
      year,
      genre,
      isExplicit
    };
    axios
      .put(`http://localhost:8000/api/albums/${id}`, updateAlbum)
      .then((res) => {
        navigate(`/albums/${id}/details`);
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };
  return (
    <div>
      <NavBar title={"Edit Album"} />
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
        <button type="submit">Edit</button>
      </Form>
    </div>
  );
};

export default Edit;
