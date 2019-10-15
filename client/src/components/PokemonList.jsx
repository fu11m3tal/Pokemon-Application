import React from 'react';
import PokemonListEntry from './PokemonListEntry.jsx'

const PokemonList = ({ pokemon, list, removePokemon, showModal }) => {
  return (
    <div>
      <h1>List</h1>
      {list.map((pokemon, index) => 
        <PokemonListEntry 
          key={index} 
          pokemon={pokemon} 
          removePokemon={removePokemon}
          showModal={showModal}
        />
      )}
    </div>
  )
}

export default PokemonList;