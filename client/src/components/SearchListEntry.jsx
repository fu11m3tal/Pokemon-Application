import React from 'react';

const SearchListEntry = ({ pokemon, addPokemon }) => {
  return (
    <div className="pokemonContainer">
      <div className="stage">
        <img className="box bounce-4" src={pokemon.sprites.front_default}></img>
      </div>
      <button id="add" onClick={() => {addPokemon(pokemon)}}>Add</button>
      <button>Specs</button>
    </div>
  )
}

export default SearchListEntry;

