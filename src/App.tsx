import { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";

const url = "https://pokeapi.co/api/v2/pokemon?limit=151%27";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      setPokemonList(data.results);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <PokeCard pokemonList={pokemonList} />
    </>
  );
}

export default App;
