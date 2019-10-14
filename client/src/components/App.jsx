import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.getPokemon = this.getPokemon.bind(this);
  }
  
  getPokemon() {
     axios.get('/api/v2/pokemon/pikachu/')
     .then(pokemon => {
       this.setState()
     })
  }
  render() { 
    return (
      <div>
        <h1>Project 1</h1>
      </div>
    )
  }
}

export default App;
