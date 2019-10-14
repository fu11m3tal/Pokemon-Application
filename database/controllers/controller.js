const axios = require('axios'); 

exports.getPokemon = (req, res) =>  {
  var { pokemon } = req.params
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
  .then(pokemon => {
    res.status(200).send(pokemon.data)
  })
  .catch(err => {
    res.send(err)
  })
}

