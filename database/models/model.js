const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PokemonSchema = new Schema({
  "base_experience": Number,
  "forms": [{name: String, url: String}],
  "game_indices": {game_index: Number, version: {name: String, url: String}},
  "height": Number,
  "held_items": [],
  "id": Number,
  "is_default": Boolean,
  "location_area_encounters": String,
  "moves": {move: {name: String, url: String}, version_group_details: []},
  "name": String,
  "order":  Number,
  "species": {name: String, url: String},
  "sprites": {
    back_default: String,
    back_female: String,
    back_shiny: String,
    back_shiny_female: String,
    front_default: String,
    front_female: String,
    front_shiny: String,
    front_shiny_female: String
  },
  "stats": {base_stat: Number, effort: Number, stat: {name: String, url: String}},
  "types": {slot: Number, type: {name: String, url: String}},
  "weight": Number
})

var Pokemon = mongoose.model('Pokemon', PokemonSchema);

module.exports = Pokemon 


