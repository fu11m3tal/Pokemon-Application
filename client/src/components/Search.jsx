import React from 'react';

class PokemonSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchInput(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  
  handleSearchSubmit() {
    var { search } = this.state;
    var { getPokemon } = this.props;
    getPokemon(search)
    this.setState({
      search: ''
    })
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <input id="search" value={this.state.search} onChange={this.handleSearchInput}></input>
        <button onClick={this.handleSearchSubmit}>Search</button>
      </div>
    )
  }
}


export default PokemonSearch;