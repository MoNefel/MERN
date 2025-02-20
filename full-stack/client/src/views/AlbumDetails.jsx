import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";

const AlbumDetails = () => {
  const [album, setAlbum] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/albums/${id}`)
      .then((res) => {
        console.log(res);
        setAlbum(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handelDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/albums/${id}`)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <NavBar title={album.title} />
      <div>
        <h2>Album: {album.title}</h2>
        <h2>Album: {album.artist}</h2>
        <h2>Album: {album.genre}</h2>
        <h2>Album: {album.year}</h2>
        <h2>Album: {album.isExplicit ? "YES" : "NO"}</h2>
        <button onClick={() => handelDelete(album._id)}>
          Buy {album.title}
        </button>
      </div>
    </div>
  );
};

export default AlbumDetails;
