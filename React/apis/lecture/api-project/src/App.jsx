import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import StarWars from "./components/StarWars";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Hello from "./components/Hello";
import Form from "./components/Form";
import ColorAndNumber from "./components/ColorAndNumber";
import NotFound from "./components/NotFound";

function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((response) => {
        console.log(response.data.results);
        setPeople(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>React Routing</h1>
      <Form />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/star" element={<StarWars people={people} />} />
        <Route path="/hello/:name" element={<Hello />} />
        <Route path="/:color/:number" element={<ColorAndNumber />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route that renders the NotFound component for any undefined routes */}

      </Routes>
    </>
  );
}

export default App;
