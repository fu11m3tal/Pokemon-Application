import React from 'react';
import axios from 'axios';
import PokemonSearch from './Search.jsx'
import SearchList from './SearchList.jsx'
import PokemonList from './PokemonList.jsx'
import Modal from './Modal.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      searchList: [],
      list: [],
      show: false
    }
    this.getAllPokemon = this.getAllPokemon.bind(this);
    this.getPokemon = this.getPokemon.bind(this);
    this.addPokemon = this.addPokemon.bind(this);
    this.removePokemon = this.removePokemon.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ show: true });
  };

  hideModal() {
    this.setState({ show: false });
  };

  getAllPokemon() {
    axios.get(`/api/pokemon`)
    .then(pokemon => {
      console.log(pokemon)
      this.setState({list: pokemon.data})
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  getPokemon(name) {
     axios.get(`/api/pokemon/${name}`)
     .then(pokemon => {
       this.setState({
         pokemon: pokemon.data,
         searchList: [pokemon.data]
       });
     })
     .catch(err => {
       console.log(err);
     })
  }

  addPokemon(pokemon) {
    var list = this.state.list.slice();
    list.push(pokemon);
    this.setState({ list })
    axios.post('/api/pokemon', pokemon)
  }

  removePokemon(pokemon) {
    var list = this.state.list.slice();
    for (var i = 0; i < list.length; i++) {
      if (pokemon.id === list[i].id) {
        list.splice(i,1)
      }
    }
    if(confirm(`Are you sure you wante to ${pokemon.name}?`)) {
      this.setState({ list })
    } else {
      alert(`${pokemon.name} was not released...`)
    }
  }

  componentDidMount() {
    this.getAllPokemon();
  }

  render() { 
    var { pokemon, searchList, list, show } = this.state;
    var { getPokemon, addPokemon, removePokemon, hideModal, showModal } = this;
    return (
      <div>
        <h1>Poke-venture</h1>
        <h1>React Modal</h1>
        <Modal show={show} handleClose={hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <button type="button" onClick={showModal}>
          open
        </button>
        <PokemonSearch 
          getPokemon={getPokemon}
        />
        <SearchList
          searchList={searchList}
          addPokemon={addPokemon}
        />
        
        <PokemonList 
          pokemon={pokemon} 
          list={list}
          removePokemon={removePokemon}
        />
      </div>
    )
  }
}

export default App;
