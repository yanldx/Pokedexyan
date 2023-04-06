import Type from "./Types.jsx";
import React, { useEffect, useState } from "react";

function PokemonContent({ id }) {
  const [pokemonItem, setpokemonItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokedex-jgabriele.vercel.app/pokemons.json")
      .then((res) => res.json())
      .then((data) => {
        setpokemonItem(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const renderPokemonData = () => {
    const currentPokemon = pokemonItem[id - 1];
    const moves = currentPokemon.moves.map((move, index) => (
      <li key={index}>{move}</li>
    ));
    return (
      <div>
        <i>N° : {currentPokemon.id}</i>
        <br />
        <h2 className="pokedexnom">{currentPokemon.names["fr"]}</h2>
        <img src={currentPokemon.image} alt="pokemon" />
        <Type pType={currentPokemon.types[0]} sType={currentPokemon.types[1]} />
        <p>Hauteur : {currentPokemon.height}m</p>
        <p>Poids : {currentPokemon.weight}kg</p>
        <ul>{moves}</ul>
      </div>
    );
  };

  return (
    <div className="PokemonContent">
      {isLoading ? <p>Chargement</p> : renderPokemonData()}
    </div>
  );
}

export default PokemonContent;
