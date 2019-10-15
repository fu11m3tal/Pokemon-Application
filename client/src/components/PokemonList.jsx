import React from 'react';
import PokemonListEntry from './PokemonListEntry.jsx'

const PokemonList = ({ pokemon, list, removePokemon }) => {
  return (
    <div>
      <h1>List</h1>
      {list.map((pokemon, index) => 
        <PokemonListEntry 
          key={index} 
          pokemon={pokemon} 
          removePokemon={removePokemon}
        />
      )}
    </div>
  )
}

export default PokemonList;