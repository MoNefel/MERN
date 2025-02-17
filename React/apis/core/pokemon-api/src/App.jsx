import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((response) => {
        console.log(response);
        setPokemonList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Pokemon API</h1>
      <div>
        {pokemonList.map((poke, idx) => (
          <div key={idx}>
            <li>{poke.name}</li>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
