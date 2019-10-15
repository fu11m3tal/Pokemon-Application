var csvWriter = require('csv-write-stream')
var writer = csvWriter()
var file = require('file-system');
var fs = require('fs');
var axios = require('axios')

writer.pipe(fs.createWriteStream('database/csv/pokemon.csv'))

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 10;
  function write() {
    let ok = true;
    do {
      i -= 1;
      console.log(i)
      if (i === 0) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then(pokemone => {
          writer.write(pokemon.data, encoding, callback);
        })
        .catch(err => {
          console.log(err)
        })
      } else {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then(pokemon => {
          ok = writer.write(pokemon.data, encoding);
        })
        .catch(err => {
          console.log(err)
        })
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write()
}

writeTenMillionUsers(writer, 'utf-8', () => {
  writer.end();
});