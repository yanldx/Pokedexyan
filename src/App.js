import React, { useEffect, useState } from 'react';
import Header from './composants/Header';
import Pokemons from './composants/Pokedex';

function App() {

  const [pokemonData, setPokemonData] = useState([]);
  const [search, searchText] = useState("");
  const [lgtype, langueType] = useState("fr");

  useEffect(() => {
    async function fetchData() {
      fetch('https://pokedex-jgabriele.vercel.app/pokemons.json')
        .then(response => response.json())
        .then(result => setPokemonData(result));
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <Header langtype={langueType} searchtext={searchText} />
      <Pokemons lgtype={lgtype} pokemons={pokemonData} search={search} />
    </div>
  );
}

export default App;
