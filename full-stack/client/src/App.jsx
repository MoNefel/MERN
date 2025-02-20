import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import AlbumDetails from "./views/AlbumDetails";
import Add from "./views/Add";
import Edit from "./views/Edit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums/:id/details" element={<AlbumDetails />} />
        <Route path="/add" element={<Add />} />
        <Route path="/albums/:id/edit" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
