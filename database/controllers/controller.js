const axios = require('axios'); 

exports.getPokemon = (req, res) =>  {
  axios.get('/api/v2/pokemon/pikachu/')
}

