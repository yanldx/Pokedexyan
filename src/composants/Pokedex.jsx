import React from "react";
import Pokemoncard from './Pokemoncard.jsx';

function Pokedex({ pokemons, lgtype, search }) {

  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.names[lgtype].toUpperCase().includes(search.toUpperCase());
  });

  const pokedex = filteredPokemons.map((pokemon) => {
    return (
      <Pokemoncard key={pokemon.id} id={pokemon.id} name={pokemon.names[lgtype]} image={pokemon.image} typeP={pokemon.types[0]} typeS={pokemon.types[1]} />
    );
  });

  return (
    <div className="pokedex">
      {pokedex}
    </div>
  );
}

export default Pokedex;
