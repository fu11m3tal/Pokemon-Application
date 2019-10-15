import React from 'react';
import PokemonListEntry from './PokemonListEntry.jsx'

const PokemonList = ({ pokemon, removePokemon }) => {
  return (
    <div className="pokemonContainer">
      <img className="box bounce-4" src={pokemon.sprites.front_default}></img>
      <button onClick={() => {removePokemon(pokemon)}}>Release</button>
      <button>Specs</button>
    </div>
  )
}

export default PokemonList;