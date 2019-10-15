const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../database/controllers/controller.js')
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/pokemon', controller.getAllPokemon);

app.get('/api/pokemon/:pokemon', controller.getPokemon);

app.post('/api/pokemon', controller.addToDB)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

