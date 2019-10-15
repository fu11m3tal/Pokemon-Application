import React from 'react';
import SearchListEntry from './SearchListEntry.jsx'

const SearchList = ({ searchList, addPokemon }) => {
  return (
    <div>
      <h1>Results</h1>
      {searchList.map((pokemon, index) => 
        <SearchListEntry key={index} pokemon={pokemon} addPokemon={addPokemon}/>
      )}
    </div>
  )
}

export default SearchList;