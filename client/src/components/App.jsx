import React from 'react';
import axios from 'axios';
import PokemonList from './PokemonList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      list: []
    }
    this.getPokemon = this.getPokemon.bind(this);
  }
  
  getPokemon(name) {
     axios.get(`/api/pokemon/${name}`)
     .then(pokemon => {
       this.setState({
         pokemon: pokemon.data,
         list: [pokemon.data]
       });
     })
     .catch(err => {
       console.log(err);
     })
  }

  componentDidMount() {
    this.getPokemon('pikachu')
  }

  render() { 
    var { pokemon, list } = this.state;
    return (
      <div>
        <h1>Project 1</h1>
        <PokemonList pokemon={pokemon} list={list}/>
      </div>
    )
  }
}

export default App;
