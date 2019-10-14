import React from 'react';
import PokemonListEntry from './PokemonListEntry.jsx'

const PokemonList = ({ pokemon, list }) => {
  return (
    <div>
      <h1>List</h1>
      {list.map((pokemon, index) => 
      <PokemonListEntry pokemon={pokemon}/>
      )}
    </div>
  )
}

export default PokemonList;