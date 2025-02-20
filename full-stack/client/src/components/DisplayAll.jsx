import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayAll = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/albums")
      .then((res) => {
        console.log(res.data);
        setAlbums(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="m-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Album</th>
            <th>Artist</th>
            <th>Year</th>
            <th>Genre</th>
            <th>isExplicit</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <tr key={album._id}>
              <td>{album.title}</td>
              <td>{album.artist}</td>
              <td>{album.year}</td>
              <td>{album.genre}</td>
              <td>{album.isExplicit ? "Yes" : "NO"}</td>
              <td>
                <Link to={`/albums/${album._id}/details`}>
                  <button>Album Details</button>
                </Link>{" "}
                <Link to={`/albums/${album._id}/edit`}>
                  <button>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DisplayAll;
