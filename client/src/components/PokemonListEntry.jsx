import React from 'react';


const PokemonListEntry = ({ pokemon, removePokemon, showModal }) => {
  return (
    <div className="pokemonContainer">
      <img className="box bounce-4" src={pokemon.sprites.front_default}></img>
      <button onClick={() => {removePokemon(pokemon)}}>Release</button>
      <button onClick={() => {showModal(pokemon)}}>Specs</button>
    </div>
  )
}

export default PokemonListEntry;