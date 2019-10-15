const axios = require('axios'); 
const db = require('../index.js')
const Pokemon = require ('../models/model.js')

exports.getPokemon = (req, res) =>  {
  var { pokemon } = req.params
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
  .then(pokemon => {
    res.status(200).send(pokemon.data)
    return pokemon.data
  })
  .then(pokemon => {
    const newPokemon = new Pokemon(pokemon);
    newPokemon.save()
    .then(pokemon => {
      console.log('success ', pokemon)
    })
    .catch(err => {
      console.log('it fucked up ', err);
    })
  })
  .catch(err => {
    res.send(err)
  })
}

exports.getAllPokemon = (req, res) => {
  Pokemon.find()
  .then(pokemon => {
    res.send(pokemon);
  })
  .catch(err => {
    console.log(err);
  });
}

exports.addToDB = (req, res) => {
  console.log(req.body)
  const newPokemon = new Pokemon(req.body);
  newPokemon.save()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err);
  })
}
